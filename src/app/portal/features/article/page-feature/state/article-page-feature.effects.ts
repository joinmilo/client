import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs';
import { ArticleEntity, GetArticlesGQL } from 'src/schema/schema';
import { ArticlePageFeatureActions } from './article-page-feature.actions';

@Injectable()
export class ArticlePageFeatureEffects {

  getRecentArticles = createEffect(() => this.actions.pipe(
    ofType(ArticlePageFeatureActions.getRecentArticles),
    switchMap(() => this.getArticlesService.watch({
      params: {
        sort: 'modified',
        dir: 'desc',
        size: 10,
      }
     }).valueChanges),
    map(response => ArticlePageFeatureActions.setRecentArticles(response.data.getArticles?.result as ArticleEntity[]))
  ));

  constructor(
    private actions: Actions,
    private getArticlesService: GetArticlesGQL,
  ) {}
}
