import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map, switchMap, withLatestFrom } from 'rxjs';
import { ArticleEntity, PageableList_ArticleEntity, QueryOperator } from 'src/app/core/api/generated/schema';
import { GetArticleCardGQL } from 'src/app/shared/widgets/card/api/generated/get-article-card.query.generated';
import { GetArticleCardsGQL } from 'src/app/shared/widgets/card/api/generated/get-article-cards.query.generated';
import { PortalArticleOverviewActions } from './portal-article-overview.actions';
import { selectParams } from './portal-article-overview.selectors';

@Injectable()
export class PortalArticleOverviewEffects {

  getSponsoredArticle = createEffect(() => this.actions.pipe(
    ofType(PortalArticleOverviewActions.getSponsoredArticle),
    switchMap(() => this.getArticleService.watch({ 
      entity: {
        sponsored: true
      }
    }).valueChanges),
    map(response => PortalArticleOverviewActions.setSponsoredArticle(response.data.getArticle as ArticleEntity))
  ));
  
  updateParams = createEffect(() => this.actions.pipe(
    ofType(PortalArticleOverviewActions.updateParams),
    withLatestFrom(this.store.select(selectParams)),
    map(([,params]) => ({
      ...params,
      expression: {
        conjunction: {
          operands: [
            ...params.expression?.conjunction?.operands || [],
            {
              entity: {
                path: 'approved',
                operator: QueryOperator.Equal,
                value: 'true'
              }
            }
          ]
        }
      }
    })),
    switchMap((params) => this.getArticlesService.watch({ params }).valueChanges),
    map(response => PortalArticleOverviewActions.setOverviewData(response.data.getArticles as PageableList_ArticleEntity))
  ));

  constructor(
    private actions: Actions,
    private getArticleService: GetArticleCardGQL,
    private getArticlesService: GetArticleCardsGQL,
    private store: Store,
  ) {}
}
