import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap, tap } from 'rxjs';
import { ArticleCategoryEntity } from 'src/app/core/api/generated/schema';
import { articlesFeatureKey } from 'src/app/core/constants/feature.constants';
import { adminUrl } from 'src/app/core/constants/module.constants';
import { CoreActions } from 'src/app/core/state/actions/core.actions';
import { FeedbackType } from 'src/app/core/typings/feedback';
import { GetArticleCategoriesGQL } from '../../../api/generated/get-article-categories.query.generated';
import { SaveArticleCategoryGQL } from '../../../api/generated/save-article-category.mutation.generated';
import { ArticleAdminCategoryFormActions } from './article-admin-category-form.actions';

@Injectable()
export class ArticleAdminCategoryFormEffects {

  // getArticle = createEffect(() => this.actions.pipe(
  //   ofType(ArticleAdminFormActions.getArticle),
  //   switchMap((action) => this.getArticleService.watch({
  //     entity: {
  //       slug: action.slug
  //     }
  //   }).valueChanges),
  //   map(response => response.data.getArticle?.id
  //     ? ArticleAdminFormActions.setArticle(response.data.getArticle as ArticleEntity)
  //     : AdminActions.notFound())
  // ));

  cancelled = createEffect(() => this.actions.pipe(
    ofType(ArticleAdminCategoryFormActions.cancelled),
    tap(() => this.router.navigate([adminUrl, articlesFeatureKey])),
  ), { dispatch: false });


  save = createEffect(() => this.actions.pipe(
    ofType(ArticleAdminCategoryFormActions.save),
    switchMap(action => this.saveArticleCategoryService.mutate({
      entity: action.article
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

  getCategories = createEffect(() => this.actions.pipe(
    ofType(ArticleAdminCategoryFormActions.getCategories),
    switchMap(() => this.getCategoriesService.watch().valueChanges),
    map(response => ArticleAdminCategoryFormActions.setCategories(response.data.getArticleCategories?.result as ArticleCategoryEntity[]))
  ));

  constructor(
    private actions: Actions,
    private saveArticleCategoryService: SaveArticleCategoryGQL,
    private getCategoriesService: GetArticleCategoriesGQL,
    private router: Router
  ) {}
}
