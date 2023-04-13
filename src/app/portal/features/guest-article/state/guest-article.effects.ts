import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs';
import { FeedbackType } from 'src/app/core/typings/feedback';
import { ArticleCategoryEntity, ArticleEntity, SaveArticleGQL } from 'src/schema/schema';
import { CoreActions } from '../../../../core/state/core.actions';
import { GetArticleCategoriesGQL } from './../../../../../schema/schema';
import { GuestArticleActions } from './guest-article.actions';

@Injectable()
export class ReportEffects {

  saveReport = createEffect(() => this.actions.pipe(
    ofType(GuestArticleActions.saveArticle),
    switchMap((action) => this.saveArticleService.mutate({
      entity: action.entity
    })),
    map(response => GuestArticleActions.articleSaved(response.data?.saveArticle as ArticleEntity))
  ));

  articleSaved = createEffect(() => this.actions.pipe(
    ofType(GuestArticleActions.articleSaved),
    map(() => CoreActions.setFeedback({
      type: FeedbackType.Success,
      labelMessage: 'articleReceived'
    }))
  ));

  getCurrentCategories = createEffect(() => this.actions.pipe(
    ofType(GuestArticleActions.getArticleCategories),
    switchMap(() => this.getArticleCategoriesService.watch().valueChanges),
    map(response => GuestArticleActions.setArticleCategories(response.data.getArticleCategories?.result as ArticleCategoryEntity[]))
  ));

  constructor(
    private actions: Actions,
    private saveArticleService: SaveArticleGQL,
    private getArticleCategoriesService: GetArticleCategoriesGQL
  ) { }
}
