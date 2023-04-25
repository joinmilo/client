import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs';
import { FeedbackType } from 'src/app/core/typings/feedback';
import { ArticleCategoryEntity, ArticleEntity, SaveArticleGQL } from 'src/schema/schema';
import { GetArticleCategoriesGQL } from '../../../../../schema/schema';
import { CoreActions } from '../../../../core/state/core.actions';
import { PortalGuestArticleActions } from './portal-guest-article.actions';

@Injectable()
export class PortalGuestArticleEffects {

  saveReport = createEffect(() => this.actions.pipe(
    ofType(PortalGuestArticleActions.saveArticle),
    switchMap((action) => this.saveArticleService.mutate({
      entity: action.entity
    })),
    map(response => PortalGuestArticleActions.articleSaved(response.data?.saveArticle as ArticleEntity))
  ));

  articleSaved = createEffect(() => this.actions.pipe(
    ofType(PortalGuestArticleActions.articleSaved),
    map(() => CoreActions.setFeedback({
      type: FeedbackType.Success,
      labelMessage: 'articleReceived'
    }))
  ));

  getCurrentCategories = createEffect(() => this.actions.pipe(
    ofType(PortalGuestArticleActions.getArticleCategories),
    switchMap(() => this.getArticleCategoriesService.watch().valueChanges),
    map(response => PortalGuestArticleActions.setArticleCategories(response.data.getArticleCategories?.result as ArticleCategoryEntity[]))
  ));

  constructor(
    private actions: Actions,
    private saveArticleService: SaveArticleGQL,
    private getArticleCategoriesService: GetArticleCategoriesGQL
  ) { }
}
