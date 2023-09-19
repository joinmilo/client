import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { EMPTY, map, of, switchMap, withLatestFrom } from 'rxjs';
import { PageableList_ArticleCategoryEntity } from 'src/app/core/api/generated/schema';
import { CoreActions } from 'src/app/core/state/actions/core.actions';
import { FeedbackType } from 'src/app/core/typings/feedback';
import { ConfirmDeleteComponent } from 'src/app/shared/dialogs/confirm-delete/confirm-delete.component';
import { DeleteArticleCategoryGQL } from '../../../api/generated/delete-article-category.mutation.generated';
import { GetArticleCategoriesGQL } from '../../../api/generated/get-article-categories.query.generated';
import { ArticleAdminCategoryActions } from './article-admin-category.actions';
import { selectParams } from './article-admin-category.selectors';

@Injectable()
export class ArticleAdminCategoryEffects {

  updateParams = createEffect(() => this.actions.pipe(
    ofType(
      ArticleAdminCategoryActions.updateParams,
      ArticleAdminCategoryActions.categoryDeleted,
    ),
    withLatestFrom(this.store.select(selectParams)),
    switchMap(([, params]) => this.getArticleCategoriesService.watch({ 
      params,
    }).valueChanges),
    map(response => ArticleAdminCategoryActions.setCategoryData(response.data.getArticleCategories as PageableList_ArticleCategoryEntity))
  ));

  deleteArticle = createEffect(() => this.actions.pipe(
    ofType(ArticleAdminCategoryActions.deleteCategory),
    switchMap(action => this.dialog.open(ConfirmDeleteComponent, { data: action.category?.name })
      .afterClosed().pipe(
        switchMap(confirmed => confirmed
          ? of(action.category)
          : EMPTY
        )
      )
    ),
    switchMap(article => this.deleteArticleCategoryService.mutate({
      id: article?.id
    })),
    map(() => ArticleAdminCategoryActions.categoryDeleted())
  ));

  articleDeleted = createEffect(() => this.actions.pipe(
    ofType(ArticleAdminCategoryActions.categoryDeleted),
    map(() => CoreActions.setFeedback({
      type: FeedbackType.Success,
      labelMessage: 'deletedSuccessfully'
    }))
  ));

  constructor(
    private actions: Actions,
    private dialog: MatDialog,
    private deleteArticleCategoryService: DeleteArticleCategoryGQL,
    private getArticleCategoriesService: GetArticleCategoriesGQL,
    private store: Store,
  ) {}
}
