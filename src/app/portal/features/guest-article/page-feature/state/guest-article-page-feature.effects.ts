import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs';
import { ArticleEntity, GetArticlesGQL, QueryOperator } from 'src/schema/schema';
import { GuestArticlePageFeatureActions } from './guest-article-page-feature.actions';

@Injectable()
export class ArticlePageFeatureEffects {

  getRecentGuestArticles = createEffect(() => this.actions.pipe(
    ofType(GuestArticlePageFeatureActions.getRecentGuestArticles),
    switchMap(() => this.getArticlesService.watch({
      params: {
        expression: {
          entity: {
            path: 'publicAuthor',
            operator: QueryOperator.NotEqual,
            value: null,
          }
        }
      }
     }).valueChanges),
    map(response => GuestArticlePageFeatureActions.setRecentGuestArticles(response.data.getArticles?.result as ArticleEntity[]))
  ));

  constructor(
    private actions: Actions,
    private getArticlesService: GetArticlesGQL,
  ) {}
}
