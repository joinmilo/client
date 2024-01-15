import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { EMPTY, map, of, switchMap, withLatestFrom } from 'rxjs';
import { PageableList_InfoMediaCategoryEntity } from 'src/app/core/api/generated/schema';
import { CoreActions } from 'src/app/core/state/actions/core.actions';
import { FeedbackType } from 'src/app/core/typings/feedback';
import { ConfirmDialogService } from 'src/app/shared/confirmDialog/dialog-confirm.service';
import { ConfirmDialogType } from 'src/app/shared/confirmDialog/typings/confirm-dialog';
import { DeleteMediaCategoryGQL } from '../../../api/generated/delete-media-category.mutation.generated';
import { GetMediaCategoriesGQL } from '../../../api/generated/get-media-categories.query.generated';
import { MediaAdminCategoryActions } from './media-admin-category.actions';
import { selectParams } from './media-admin-category.selectors';

@Injectable()
export class MediaAdminCategoryEffects {

  updateParams = createEffect(() => this.actions.pipe(
    ofType(
      MediaAdminCategoryActions.updateParams,
      MediaAdminCategoryActions.categoryDeleted,
    ),
    withLatestFrom(this.store.select(selectParams)),
    switchMap(([, params]) => this.getMediaCategoriesService.watch({ 
      params,
    }).valueChanges),
    map(response => MediaAdminCategoryActions.setCategoryData(response.data.getInfoMediaCategories as PageableList_InfoMediaCategoryEntity))
  ));

  deleteMedia = createEffect(() => this.actions.pipe(
    ofType(MediaAdminCategoryActions.deleteCategory),
    switchMap(action => this.confirmDialogService
      .confirm({ type: ConfirmDialogType.Delete, context: action.category?.name }).pipe(
        switchMap(confirmed => confirmed
          ? of(action.category)
          : EMPTY
        )
      )
    ),
    switchMap(media => this.deleteMediaCategoryService.mutate({
      id: media?.id
    })),
    map(() => MediaAdminCategoryActions.categoryDeleted())
  ));

  mediaDeleted = createEffect(() => this.actions.pipe(
    ofType(MediaAdminCategoryActions.categoryDeleted),
    map(() => CoreActions.setFeedback({
      type: FeedbackType.Success,
      labelMessage: 'deletedSuccessfully'
    }))
  ));

  constructor(
    private actions: Actions,
    private dialog: MatDialog,
    private deleteMediaCategoryService: DeleteMediaCategoryGQL,
    private getMediaCategoriesService: GetMediaCategoriesGQL,
    private store: Store,
    private confirmDialogService: ConfirmDialogService
  ) {}
}
