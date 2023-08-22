import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map, switchMap, withLatestFrom } from 'rxjs';
import { ArticleEntity, GetArticlesGQL, GetFullArticleGQL, PageableList_ArticleEntity } from 'src/schema/schema';
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
    switchMap(([, params]) => this.getArticlesService.watch({ 
      params,
    }).valueChanges),
    map(response => PortalArticleOverviewActions.setOverviewData(response.data.getArticles as PageableList_ArticleEntity))
  ));

  constructor(
    private actions: Actions,
    private getArticleService: GetFullArticleGQL,
    private getArticlesService: GetArticlesGQL,
    private store: Store,
  ) {}
}
