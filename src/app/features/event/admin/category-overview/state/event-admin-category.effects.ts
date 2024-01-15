import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { EMPTY, map, of, switchMap, withLatestFrom } from 'rxjs';
import { PageableList_EventCategoryEntity } from 'src/app/core/api/generated/schema';
import { CoreActions } from 'src/app/core/state/actions/core.actions';
import { FeedbackType } from 'src/app/core/typings/feedback';
import { ConfirmDialogService } from 'src/app/shared/confirmDialog/dialog-confirm.service';
import { ConfirmDialogType } from 'src/app/shared/confirmDialog/typings/confirm-dialog';
import { DeleteEventCategoryGQL } from '../../../api/generated/delete-event-category.mutation.generated';
import { GetEventCategoriesGQL } from '../../../api/generated/get-event-categories.query.generated';
import { EventAdminCategoryActions } from './event-admin-category.actions';
import { selectParams } from './event-admin-category.selectors';

@Injectable()
export class EventAdminCategoryEffects {

  updateParams = createEffect(() => this.actions.pipe(
    ofType(
      EventAdminCategoryActions.updateParams,
      EventAdminCategoryActions.categoryDeleted,
    ),
    withLatestFrom(this.store.select(selectParams)),
    switchMap(([, params]) => this.getEventCategoriesService.watch({ 
      params,
    }).valueChanges),
    map(response => EventAdminCategoryActions.setCategoryData(response.data.getEventCategories as PageableList_EventCategoryEntity))
  ));

  deleteEvent = createEffect(() => this.actions.pipe(
    ofType(EventAdminCategoryActions.deleteCategory),
    switchMap(action => this.confirmDialogService
      .confirm({ type: ConfirmDialogType.Delete, context: action.category?.name }).pipe(
        switchMap(confirmed => confirmed
          ? of(action.category)
          : EMPTY
        )
      )
    ),
    switchMap(event => this.deleteEventCategoryService.mutate({
      id: event?.id
    })),
    map(() => EventAdminCategoryActions.categoryDeleted())
  ));

  eventDeleted = createEffect(() => this.actions.pipe(
    ofType(EventAdminCategoryActions.categoryDeleted),
    map(() => CoreActions.setFeedback({
      type: FeedbackType.Success,
      labelMessage: 'deletedSuccessfully'
    }))
  ));

  constructor(
    private actions: Actions,
    private dialog: MatDialog,
    private deleteEventCategoryService: DeleteEventCategoryGQL,
    private getEventCategoriesService: GetEventCategoriesGQL,
    private store: Store,
    private confirmDialogService: ConfirmDialogService
  ) {}
}
