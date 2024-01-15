import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { EMPTY, map, of, switchMap, withLatestFrom } from 'rxjs';
import { PageableList_EventEntity, QueryOperator } from 'src/app/core/api/generated/schema';
import { DeleteEventGQL } from 'src/app/features/organisation/api/generated/delete-event.mutation.generated';
import { GetOrganisationEventsGQL } from 'src/app/features/organisation/api/generated/get-organisation-events.query.generated';
import { ConfirmDialogService } from 'src/app/shared/confirmDialog/dialog-confirm.service';
import { ConfirmDialogType } from 'src/app/shared/confirmDialog/typings/confirm-dialog';
import { OrganisationAdminDetailsEventsActions } from './organisation-admin-details-events.actions';
import { selectParams, selectSlug } from './organisation-admin-details-events.selectors';

@Injectable()
export class OrganisationAdminDetailsEventsEffects {

  updateParams = createEffect(() => this.actions.pipe(
    ofType(
      OrganisationAdminDetailsEventsActions.updateParams,
      OrganisationAdminDetailsEventsActions.eventDeleted
    ),
    withLatestFrom(
      this.store.select(selectSlug),
      this.store.select(selectParams)),
    switchMap(([, id, params]) => this.getOrganisationEventsService.watch({
      params: {
        ...params,
        expression: {
          entity: {
            path: 'organisation.id',
            operator: QueryOperator.Equal,
            value: id
          }
        }
      }
    }).valueChanges),
    map(response => OrganisationAdminDetailsEventsActions.setEvents(response.data.getEvents as PageableList_EventEntity))
  ));

  deleteEvent = createEffect(() => this.actions.pipe(
    ofType(OrganisationAdminDetailsEventsActions.deleteEvent),
    switchMap(action => this.confirmDialogService
      .confirm({ type: ConfirmDialogType.Delete, context: action.event?.name }).pipe(
        switchMap(confirmed => confirmed
          ? of(action.event)
          : EMPTY
        )
      )
    ),
    switchMap(event => this.deleteEventService.mutate({
      id: event?.id
    })),
    map(() => OrganisationAdminDetailsEventsActions.eventDeleted())
  ));

  constructor(
    private actions: Actions,
    private dialog: MatDialog,
    private getOrganisationEventsService: GetOrganisationEventsGQL,
    private deleteEventService: DeleteEventGQL,
    private store: Store,
    private confirmDialogService: ConfirmDialogService
  ) { }
}
