import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { FeedbackType } from 'ngx-cinlib/modals/feedback';
import { map, switchMap, tap } from 'rxjs';
import { articlesFeatureKey } from 'src/app/core/constants/feature.constants';
import { adminUrl } from 'src/app/core/constants/module.constants';
import { CoreActions } from 'src/app/core/state/actions/core.actions';

import { GetArticleCategoryGQL } from '../../../api/generated/get-article-category.query.generated';
import { SaveArticleCategoryGQL } from '../../../api/generated/save-article-category.mutation.generated';
import { ArticleAdminCategoryFormActions } from './article-admin-category-form.actions';

@Injectable()
export class ArticleAdminCategoryFormEffects {

  cancelled = createEffect(() => this.actions.pipe(
    ofType(ArticleAdminCategoryFormActions.cancelled),
    tap(() => this.router.navigate([adminUrl, articlesFeatureKey, 'category'])),
  ), { dispatch: false });

  save = createEffect(() => this.actions.pipe(
    ofType(ArticleAdminCategoryFormActions.save),
    switchMap(action => this.saveArticleCategoryService.mutate({
      entity: action.category
    })),
    map(() => ArticleAdminCategoryFormActions.saved())
  ));

  saved = createEffect(() => this.actions.pipe(
    ofType(ArticleAdminCategoryFormActions.saved),
    tap(() => this.router.navigate([adminUrl, articlesFeatureKey])),
    map(() => CoreActions.setFeedback({
      type: FeedbackType.Success,
      labelMessage: 'savedSuccessfully'
    }))
  ));

  getCategory = createEffect(() => this.actions.pipe(
    ofType(ArticleAdminCategoryFormActions.getCategory),
    switchMap(action => this.getArticleCategoryService.watch({
      entity: { id: action.entityId }
    }).valueChanges),
    map(response => ArticleAdminCategoryFormActions.categoryRetrieved(response.data.getArticleCategory))
  ));

  constructor(
    private actions: Actions,
    private saveArticleCategoryService: SaveArticleCategoryGQL,
    private getArticleCategoryService: GetArticleCategoryGQL,
    private router: Router
  ) {}
}
