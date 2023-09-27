import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs';
import { AdminActions } from 'src/app/admin/state/admin.actions';
import { ArticleEntity } from 'src/app/core/api/generated/schema';
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

  // cancelled = createEffect(() => this.actions.pipe(
  //   ofType(ArticleAdminFormActions.cancelled),
  //   tap(() => this.router.navigate([adminUrl, articlesFeatureKey,'forms'])),
  // ), { dispatch: false });


  // save = createEffect(() => this.actions.pipe(
  //   ofType(ArticleAdminFormActions.save),
  //   switchMap(action => this.saveArticleService.mutate({
  //     entity: action.article
  //   })),
  //   map(() => ArticleAdminFormActions.saved())
  // ));

  // saved = createEffect(() => this.actions.pipe(
  //   ofType(ArticleAdminFormActions.saved),
  //   tap(() => this.router.navigate([adminUrl, articlesFeatureKey, 'forms'])),
  //   map(() => CoreActions.setFeedback({
  //     type: FeedbackType.Success,
  //     labelMessage: 'savedSuccessfully'
  //   }))
  // ));

  constructor(
    private actions: Actions,
    private getArticleService: GetArticleFormGQL,
    private saveArticleService: SaveArticleGQL,
    private router: Router
  ) {}
}
