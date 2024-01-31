import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { FeedbackType } from 'ngx-cinlib/modals/feedback';
import { map, switchMap, tap } from 'rxjs';
import { AdminActions } from 'src/app/admin/state/admin.actions';
import { ArticleCategoryEntity, ArticleEntity } from 'src/app/core/api/generated/schema';
import { articlesFeatureKey } from 'src/app/core/constants/feature.constants';
import { adminUrl } from 'src/app/core/constants/module.constants';
import { CoreActions } from 'src/app/core/state/actions/core.actions';
import { GetArticleCategoriesGQL } from '../../../api/generated/get-article-categories.query.generated';
import { GetArticleFormGQL } from '../../../api/generated/get-article-form.query.generated';
import { SaveArticleGQL } from '../../../api/generated/save-article.mutation.generated';
import { ArticleAdminFormActions } from './article-admin-form.actions';

@Injectable()
export class ArticleAdminFormEffects {

  getArticle = createEffect(() => this.actions.pipe(
    ofType(ArticleAdminFormActions.getArticle),
    switchMap((action) => this.getArticleService.watch({
      entity: {
        slug: action.slug
      }
    }).valueChanges),
    map(response => response.data.getArticle?.id
      ? ArticleAdminFormActions.setArticle(response.data.getArticle as ArticleEntity)
      : AdminActions.notFound())
  ));

  cancelled = createEffect(() => this.actions.pipe(
    ofType(ArticleAdminFormActions.cancelled),
    tap(() => this.router.navigate([adminUrl, articlesFeatureKey])),
  ), { dispatch: false });


  save = createEffect(() => this.actions.pipe(
    ofType(ArticleAdminFormActions.save),
    switchMap(action => this.saveArticleService.mutate({
      entity: action.article
    })),
    map(() => ArticleAdminFormActions.saved())
  ));

  saved = createEffect(() => this.actions.pipe(
    ofType(ArticleAdminFormActions.saved),
    tap(() => this.router.navigate([adminUrl, articlesFeatureKey])),
    map(() => CoreActions.setFeedback({
      type: FeedbackType.Success,
      labelMessage: 'savedSuccessfully'
    }))
  ));

  getCategories = createEffect(() => this.actions.pipe(
    ofType(ArticleAdminFormActions.getCategories),
    switchMap(() => this.getCategoriesService.watch().valueChanges),
    map(response => ArticleAdminFormActions.setCategories(response.data.getArticleCategories?.result as ArticleCategoryEntity[]))
  ));

  constructor(
    private actions: Actions,
    private getArticleService: GetArticleFormGQL,
    private saveArticleService: SaveArticleGQL,
    private getCategoriesService: GetArticleCategoriesGQL,
    private router: Router
  ) {}
}
