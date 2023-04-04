import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs';
import { CommonActions } from 'src/app/portal/common/state/common.actions';
import { ArticleEntity, GetArticlesGQL, GetPageGQL, PageEntity } from 'src/schema/schema';
import { PageActions, PageFeatureActions } from './page.actions';

@Injectable()
export class PageEffects {

  getPage = createEffect(() => this.actions.pipe(
    ofType(PageActions.getPage),
    switchMap((action) => this.getPageService.watch({ slug: action.slug }).valueChanges),
    map(response => response.data.getPage?.id
      ? PageActions.setCurrentPage(response.data.getPage as PageEntity)
      : CommonActions.notFound())
  ));

  getLandingPage = createEffect(() => this.actions.pipe(
    ofType(PageActions.getLandingPage),
    switchMap(() => this.getPageService.watch({ isLanding: true }).valueChanges),
    map(response => PageActions.setCurrentPage(response.data.getPage as PageEntity))
  ));

  getReventArticles = createEffect(() => this.actions.pipe(
    ofType(PageFeatureActions.getRecentArticles),
    switchMap(() => this.getArticlesService.watch({
      params: {
        sort: 'modified',
        dir: 'desc',
        size: 10,
      }
     }).valueChanges),
    map(response => PageFeatureActions.setRecentArticles(response.data.getArticles?.result as ArticleEntity[]))
  ));


  constructor(
    private actions: Actions,
    private getArticlesService: GetArticlesGQL,
    private getPageService: GetPageGQL,
  ) {}
}
