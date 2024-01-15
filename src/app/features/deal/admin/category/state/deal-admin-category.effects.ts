import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { EMPTY, map, of, switchMap, withLatestFrom } from 'rxjs';
import { PageableList_DealCategoryEntity } from 'src/app/core/api/generated/schema';
import { CoreActions } from 'src/app/core/state/actions/core.actions';
import { FeedbackType } from 'src/app/core/typings/feedback';
import { ConfirmDialogService } from 'src/app/shared/confirmDialog/dialog-confirm.service';
import { ConfirmDialogType } from 'src/app/shared/confirmDialog/typings/confirm-dialog';
import { DeleteDealCategoryGQL } from '../../../api/generated/delete-deal-category.mutation.generated';
import { GetDealCategoriesGQL } from '../../../api/generated/get-deal-categories.query.generated';
import { DealAdminCategoryActions } from './deal-admin-category.actions';
import { selectParams } from './deal-admin-category.selectors';

@Injectable()
export class DealAdminCategoryEffects {

  updateParams = createEffect(() => this.actions.pipe(
    ofType(
      DealAdminCategoryActions.updateParams,
      DealAdminCategoryActions.categoryDeleted,
    ),
    withLatestFrom(this.store.select(selectParams)),
    switchMap(([, params]) => this.getDealCategoriesService.watch({ 
      params,
    }).valueChanges),
    map(response => DealAdminCategoryActions.setCategoryData(response.data.getDealCategories as PageableList_DealCategoryEntity))
  ));

  deleteDealCategory = createEffect(() => this.actions.pipe(
    ofType(DealAdminCategoryActions.deleteCategory),
    switchMap(action => this.confirmDialogService
      .confirm({ type: ConfirmDialogType.Delete, context: action.category?.name }).pipe(
        switchMap(confirmed => confirmed
          ? of(action.category)
          : EMPTY
        )
      )
    ),
    switchMap(deal => this.deleteDealCategoryService.mutate({
      id: deal?.id
    })),
    map(() => DealAdminCategoryActions.categoryDeleted())
  ));

  dealDeleted = createEffect(() => this.actions.pipe(
    ofType(DealAdminCategoryActions.categoryDeleted),
    map(() => CoreActions.setFeedback({
      type: FeedbackType.Success,
      labelMessage: 'deletedSuccessfully'
    }))
  ));

  constructor(
    private actions: Actions,
    private dialog: MatDialog,
    private deleteDealCategoryService: DeleteDealCategoryGQL,
    private getDealCategoriesService: GetDealCategoriesGQL,
    private store: Store,
    private confirmDialogService: ConfirmDialogService
  ) {}
}
