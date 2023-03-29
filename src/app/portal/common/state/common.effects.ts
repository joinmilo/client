import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { map, switchMap, tap } from 'rxjs';
import { ArticleEntity, ConjunctionOperator, ContestEntity, DealEntity, EventEntity, GetArticlesGQL, GetEventsGQL, OrganisationEntity, QueryOperator, SearchDto, SurveyEntity, UserContextEntity } from 'src/schema/schema';
import { AppEntity, GetAppsGQL, GetContestsGQL, GetDealsGQL, GetMenuGQL, GetOrganisationsGQL, GetSocialMediaGQL, GetSurveysGQL, GetUserContextsGQL, MenuItemEntity, SearchGQL, SocialMediaEntity } from './../../../../schema/schema';
import { CommonActions } from './common.actions';

@Injectable()
export class CommonEffects {

  ngrxOnInitEffects(): Action {
    return CommonActions.init();
  }
  

  getApps = createEffect(() => this.actions.pipe(
    ofType(CommonActions.init),
    switchMap(() => this.getAppsService.watch().valueChanges),
    map(response => CommonActions.setApps(response.data.getApps?.result as AppEntity[]))
  ));

  getMenu = createEffect(() => this.actions.pipe(
    ofType(
      CommonActions.init,
      CommonActions.getMenu),
    switchMap(action => this.getMenuService.watch({
      parent: (action as ({ parentId: string })).parentId
    }).valueChanges),
    map(response => CommonActions.setMenu(response.data.getMenuItems?.result as MenuItemEntity[]))
  ));

  getSocialMedia = createEffect(() => this.actions.pipe(
    ofType(CommonActions.init),
    switchMap(() => this.getSocialMediaService.watch().valueChanges),
    map(response => CommonActions.setSocialMedia(response.data.getSocialMedias?.result as SocialMediaEntity[]))
  ));

  navigate = createEffect(() => this.actions.pipe(
    ofType(CommonActions.navigate),
    tap(action => {
      if (action?.item?.feature?.key) {
        this.router.navigate(['portal', action.item.feature.key]);
      }

      if (action?.item?.page?.slug) {
        this.router.navigate([`/${action.item.page.slug}`]);
      }
    }),
  ), { dispatch: false });

  notFound = createEffect(() => this.actions.pipe(
    ofType(CommonActions.notFound),
    tap(() => this.router.navigate(['/portal', '404'])),
  ), { dispatch: false });

  getSearchResult = createEffect(() => this.actions.pipe(
    ofType(CommonActions.searchQuerySet),
    switchMap((action) => this.getSearchService.watch({
      params: {
        search: action.query,
        sort: 'modified',
        dir: 'desc',
        size: 5,
      }
    }).valueChanges),
    map(response => CommonActions.setSearchResult(response.data.search as SearchDto[]))
  ));

  getEvents = createEffect(() => this.actions.pipe(
    ofType(CommonActions.searchQuerySet),
    switchMap((action) => this.getEventsService.watch({
      params: {
        search: action.query,
        sort: 'modified',
        dir: 'desc',
        size: 5,
      }
    }).valueChanges),
    map(response => CommonActions.setFoundEvents(response.data.getEvents?.result as EventEntity[]))
  ));

  getArticles = createEffect(() => this.actions.pipe(
    ofType(CommonActions.searchQuerySet),
    switchMap((action) => this.getArticlesService.watch({
      params: {
        search: action.query,
        sort: 'modified',
        dir: 'desc',
        size: 5,
      }
    }).valueChanges),
    map(response => CommonActions.setFoundArticles(response.data.getArticles?.result as ArticleEntity[]))
  ));

  getOrganisations = createEffect(() => this.actions.pipe(
    ofType(CommonActions.searchQuerySet),
    switchMap((action) => this.getOrganisationsService.watch({
      params: {
        search: action.query,
        sort: 'modified',
        dir: 'desc',
        size: 5,
      }
    }).valueChanges),
    map(response => CommonActions.setFoundOrganisations(response.data.getOrganisations?.result as OrganisationEntity[]))
  ));

  getAuthors = createEffect(() => this.actions.pipe(
    ofType(CommonActions.searchQuerySet),
    switchMap((action) => this.getUserContextsService.watch({
      params: {
        expression: {
          conjunction: {
            operands: [
              {
                conjunction: {
                  operator: ConjunctionOperator.Or,
                  operands: [
                    {
                      entity: {
                        operator: QueryOperator.Like,
                        path: 'user.firstName',
                        value: action.query
                      }
                    },
                    {
                      entity: {
                        operator: QueryOperator.Like,
                        path: 'user.lastName',
                        value: action.query
                      }
                    },
                    {
                      entity: {
                        operator: QueryOperator.Like,
                        path: 'user.email',
                        value: action.query
                      }
                    }
                  ]
                }
              },
              { entity: { operator: QueryOperator.NotEqual, path: 'articles', value: null } }
            ]
          }
        },
        sort: 'modified',
        dir: 'desc',
        size: 5,
      }
    }).valueChanges),
    map(response => CommonActions.setFoundAuthors(response.data.getUserContexts?.result as UserContextEntity[]))
  ));

  getDeals = createEffect(() => this.actions.pipe(
    ofType(CommonActions.searchQuerySet),
    switchMap((action) => this.getDealsService.watch({
      params: {
        search: action.query,
        sort: 'modified',
        dir: 'desc',
        size: 5,
      }
    }).valueChanges),
    map(response => CommonActions.setFoundDeals(response.data.getDeals?.result as DealEntity[]))
  ));

  getSurveys = createEffect(() => this.actions.pipe(
    ofType(CommonActions.searchQuerySet),
    switchMap((action) => this.getSurveysService.watch({
      params: {
        search: action.query,
        sort: 'modified',
        dir: 'desc',
        size: 5,
      }
    }).valueChanges),
    map(response => CommonActions.setFoundSurveys(response.data.getSurveys?.result as SurveyEntity[]))
  ));

  getContest = createEffect(() => this.actions.pipe(
    ofType(CommonActions.searchQuerySet),
    switchMap((action) => this.getContestsService.watch({
      params: {
        search: action.query,
        sort: 'modified',
        dir: 'desc',
        size: 5,
      }
    }).valueChanges),
    map(response => CommonActions.setFoundContests(response.data.getContests?.result as ContestEntity[]))
  ));

  constructor(
    private actions: Actions,
    private getAppsService: GetAppsGQL,
    private getMenuService: GetMenuGQL,
    private getSocialMediaService: GetSocialMediaGQL,
    private getSearchService: SearchGQL,
    private router: Router,
    private getEventsService: GetEventsGQL,
    private getArticlesService: GetArticlesGQL,
    private getOrganisationsService: GetOrganisationsGQL,
    private getUserContextsService: GetUserContextsGQL,
    private getDealsService: GetDealsGQL,
    private getSurveysService: GetSurveysGQL,
    private getContestsService: GetContestsGQL
  ) { }
}
