import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { ConfirmService, ConfirmType } from 'ngx-cinlib/modals/confirm';
import { FeedbackType } from 'ngx-cinlib/modals/feedback';
import { AuthService } from 'ngx-cinlib/security';
import { EMPTY, map, of, switchMap, withLatestFrom } from 'rxjs';
import { PageableList_EventEntity, QueryOperator } from 'src/app/core/api/generated/schema';
import { CoreActions } from 'src/app/core/state/actions/core.actions';
import { selectCurrentUser } from 'src/app/core/state/selectors/user.selectors';
import { Privilege } from 'src/app/core/typings/privilege';
import { DeleteEventGQL } from '../../../api/generated/delete-event.mutation.generated';
import { GetEventsGQL } from '../../../api/generated/get-events.query.generated';
import { SponsorEventGQL } from '../../../api/generated/sponsor-event.mutation.generated';
import { EventAdminOverviewActions } from './event-admin-overview.actions';
import { selectParams } from './event-admin-overview.selectors';

@Injectable()
export class EventAdminOverviewEffects {

  updateParams = createEffect(() => this.actions.pipe(
    ofType(
      EventAdminOverviewActions.updateParams,
      EventAdminOverviewActions.eventDeleted,
      EventAdminOverviewActions.eventSponsored
    ),
    withLatestFrom(
      this.store.select(selectParams),
      this.store.select(selectCurrentUser),
    ),
    map(([, params, user]) => this.authService.hasAnyPrivileges<Privilege>(['events_admin'])
      ? params
      : {
        ...params,
          expression: {
            conjunction: {
              operands: [
                {
                  entity: {
                    path: 'creator.id',
                    operator: QueryOperator.Equal,
                    value: user?.id as string
                  }
                }
              ]
            }
          }
        }
    ),
    switchMap(params => this.getEventsService.watch({ params }).valueChanges),
    map(response => EventAdminOverviewActions.setOverviewData(response.data.getEvents as PageableList_EventEntity))
  ));

  sponsorEvent = createEffect(() => this.actions.pipe(
    ofType(EventAdminOverviewActions.sponsorEvent),
    switchMap(action => this.confirmService
      .confirm({ type: ConfirmType.Change, context: 'thisWillSponsor' }).pipe(
        switchMap(confirmed => confirmed
          ? of(action.event)
          : EMPTY
        )
      )
    ),
    switchMap(event => this.sponsorEventService.mutate({
      eventId: event?.id,
    })),
    map(() => EventAdminOverviewActions.eventSponsored())
  ));

  eventSponsored = createEffect(() => this.actions.pipe(
    ofType(EventAdminOverviewActions.eventSponsored),
    map(() => CoreActions.setFeedback({
      type: FeedbackType.Success,
      labelMessage: 'changedSuccessfully'
    }))
  ));

  deleteEvent = createEffect(() => this.actions.pipe(
    ofType(EventAdminOverviewActions.deleteEvent),
    switchMap(action => this.confirmService
      .confirm({ type: ConfirmType.Delete, context: action.event?.name }).pipe(
        switchMap(confirmed => confirmed
          ? of(action.event)
          : EMPTY
        )
      )
    ),
    switchMap(event => this.deleteEventService.mutate({
      id: event?.id
    })),
    map(() => EventAdminOverviewActions.eventDeleted())
  ));

  eventDeleted = createEffect(() => this.actions.pipe(
    ofType(EventAdminOverviewActions.eventDeleted),
    map(() => CoreActions.setFeedback({
      type: FeedbackType.Success,
      labelMessage: 'deletedSuccessfully'
    }))
  ));
  
  constructor(
    private actions: Actions,
    private authService: AuthService,
    private dialog: MatDialog,
    private getEventsService: GetEventsGQL,
    private sponsorEventService: SponsorEventGQL,
    private deleteEventService: DeleteEventGQL,
    private store: Store,
    private confirmService: ConfirmService
  ) {}
}
