import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs';
import { ArticleEntity, QueryOperator } from 'src/app/core/api/generated/schema';
import { GetArticleCardsGQL } from 'src/app/shared/widgets/card/api/generated/get-article-cards.query.generated';
import { ArticleEmbeddngActions } from './article-embedding.actions';

@Injectable()
export class ArticleEmbeddingEffects {

  getRecentArticles = createEffect(() => this.actions.pipe(
    ofType(ArticleEmbeddngActions.getRecentArticles),
    switchMap(() => this.getArticlesService.watch({
      params: {
        sort: 'modified',
        dir: 'desc',
        size: 10,
        expression: {
          conjunction: {
            operands: [
              {
                entity: {
                  path: 'approved',
                  operator: QueryOperator.Equal,
                  value: "true"
                }
              }
            ]
          }
        }
      }
     }).valueChanges),
    map(response => ArticleEmbeddngActions.setRecentArticles(response.data.getArticles?.result as ArticleEntity[]))
  ));

  constructor(
    private actions: Actions,
    private getArticlesService: GetArticleCardsGQL,
  ) {}
}
