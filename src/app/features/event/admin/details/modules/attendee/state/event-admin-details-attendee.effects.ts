import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { ConfirmService, ConfirmType } from 'ngx-cinlib/modals/confirm';
import { FeedbackType } from 'ngx-cinlib/modals/feedback';
import { EMPTY, map, of, switchMap, withLatestFrom } from 'rxjs';
import { PageableList_EventAttendeeEntity, QueryOperator } from 'src/app/core/api/generated/schema';
import { CoreActions } from 'src/app/core/state/actions/core.actions';
import { DeleteEventAttendeeGQL } from 'src/app/features/event/api/generated/delete-eventattendee.mutation.generated';
import { GetEventAttendeesGQL } from 'src/app/features/event/api/generated/get-event-attendees.query.generated';
import { SaveEventAttendeeGQL } from 'src/app/features/event/api/generated/save-event-attendee.mutation.generated';
import { EventAdminDetailsAttendeeActions } from './event-admin-details-attendee.actions';
import { selectParams, selectSlug } from './event-admin-details-attendee.selectors';


@Injectable()
export class EventAdminDetailsAttendeeEffects {

  updateParams = createEffect(() => this.actions.pipe(
    ofType(
      EventAdminDetailsAttendeeActions.updateParams,
      EventAdminDetailsAttendeeActions.attendeeDeleted,
      EventAdminDetailsAttendeeActions.attendeeSaved
    ),
    withLatestFrom(
      this.store.select(selectSlug),
      this.store.select(selectParams)),
    switchMap(([, slug, params]) => this.getEventAttendeesService.watch({
      params: {
        ...params,
        expression: {
          entity: {
            path: 'configuration.events.slug',
            operator: QueryOperator.Equal,
            value: slug
          }
        }
      },
    }).valueChanges),
    map(response => EventAdminDetailsAttendeeActions.setAttendees(response.data.getEventAttendees as PageableList_EventAttendeeEntity))
  ));

  deleteAttendee = createEffect(() => this.actions.pipe(
    ofType(EventAdminDetailsAttendeeActions.deleteAttendee),
    switchMap(action => this.confirmService
      .confirm({ type: ConfirmType.Delete, context: action.attendee?.userContext?.user?.email }).pipe(
        switchMap(confirmed => confirmed
          ? of(action.attendee)
          : EMPTY
        )
      )
    ),
    switchMap(event => this.deleteEventAttendeeService.mutate({
      id: event?.id
    })),
    map(() => EventAdminDetailsAttendeeActions.attendeeDeleted())
  ));

  attendeeDeleted = createEffect(() => this.actions.pipe(
    ofType(EventAdminDetailsAttendeeActions.attendeeDeleted),
    map(() => CoreActions.setFeedback({
      type: FeedbackType.Success,
      labelMessage: 'deletedSuccessfully'
    }))
  ));

  saveAttendee = createEffect(() =>
    this.actions.pipe(
      ofType(EventAdminDetailsAttendeeActions.saveAttendee),
      switchMap((action) => {
        const entityInput = {
          id: action.attendee?.id,
          approved: !action.attendee?.approved
        };
        return this.saveEventAttendeeService.mutate(
          {
            entity: entityInput
          })
      }
      ),
      map(() => EventAdminDetailsAttendeeActions.attendeeSaved())
    )
  );


  constructor(
    private actions: Actions,
    private confirmService: ConfirmService,
    private deleteEventAttendeeService: DeleteEventAttendeeGQL,
    private getEventAttendeesService: GetEventAttendeesGQL,
    private saveEventAttendeeService: SaveEventAttendeeGQL,
    private store: Store,
  ) { }
}
