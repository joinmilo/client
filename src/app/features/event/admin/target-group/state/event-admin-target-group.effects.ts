import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { EMPTY, map, of, switchMap, withLatestFrom } from 'rxjs';
import { PageableList_EventTargetGroupEntity } from 'src/app/core/api/generated/schema';
import { CoreActions } from 'src/app/core/state/actions/core.actions';
import { FeedbackType } from 'src/app/core/typings/feedback';
import { ConfirmDeleteComponent } from 'src/app/shared/dialogs/confirm-delete/confirm-delete.component';
import { DeleteEventTargetGroupGQL } from '../../../api/generated/delete-event-target-group.mutation.generated';
import { GetEventTargetGroupsGQL } from '../../../api/generated/get-event-target-groups.query.generated';
import { EventAdminTargetGroupActions } from './event-admin-target-group.actions';
import { selectParams } from './event-admin-target-group.selectors';

@Injectable()
export class EventAdminTargetGroupEffects {

  updateParams = createEffect(() => this.actions.pipe(
    ofType(
      EventAdminTargetGroupActions.updateParams,
      EventAdminTargetGroupActions.targetGroupDeleted,
    ),
    withLatestFrom(this.store.select(selectParams)),
    switchMap(([, params]) => this.getEventCategoriesService.watch({ 
      params,
    }).valueChanges),
    map(response => EventAdminTargetGroupActions.setTargetGroupData(response.data.getEventTargetGroups as PageableList_EventTargetGroupEntity))
  ));

  deleteEvent = createEffect(() => this.actions.pipe(
    ofType(EventAdminTargetGroupActions.deleteTargetGroup),
    switchMap(action => this.dialog.open(ConfirmDeleteComponent, { data: action.targetGroup?.name })
      .afterClosed().pipe(
        switchMap(confirmed => confirmed
          ? of(action.targetGroup)
          : EMPTY
        )
      )
    ),
    switchMap(event => this.deleteEventTargetGroupService.mutate({
      id: event?.id
    })),
    map(() => EventAdminTargetGroupActions.targetGroupDeleted())
  ));

  eventDeleted = createEffect(() => this.actions.pipe(
    ofType(EventAdminTargetGroupActions.targetGroupDeleted),
    map(() => CoreActions.setFeedback({
      type: FeedbackType.Success,
      labelMessage: 'deletedSuccessfully'
    }))
  ));

  constructor(
    private actions: Actions,
    private dialog: MatDialog,
    private deleteEventTargetGroupService: DeleteEventTargetGroupGQL,
    private getEventCategoriesService: GetEventTargetGroupsGQL,
    private store: Store,
  ) {}
}
