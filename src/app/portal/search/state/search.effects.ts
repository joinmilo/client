import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap, tap } from 'rxjs';
import { ArticleEntity, ConjunctionOperator, ContestEntity, DealEntity, EventEntity, GetArticlesGQL, GetEventsGQL, OrganisationEntity, QueryOperator, SearchDto, SurveyEntity, UserContextEntity } from 'src/schema/schema';
import { GetContestsGQL, GetDealsGQL, GetOrganisationsGQL, GetSurveysGQL, GetUserContextsGQL, SearchGQL } from '../../../../schema/schema';
import { SearchActions } from './search.actions';

@Injectable()
export class SearchEffects {

  navigateSearchPage = createEffect(() => this.actions.pipe(
    ofType(SearchActions.navigateSearchPage),
    tap(() => this.router.navigate(['/portal', 'search'])),
  ), { dispatch: false });

  getSearchResult = createEffect(() => this.actions.pipe(
    ofType(SearchActions.searchQuerySet),
    switchMap((action) => this.getSearchService.watch({
      params: {
        search: action.query,
        sort: 'modified',
        dir: 'desc',
        size: 4,
      }
    }).valueChanges),
    map(response => SearchActions.setSearchResult(response.data.search as SearchDto[]))
  ));

  getEvents = createEffect(() => this.actions.pipe(
    ofType(SearchActions.searchQuerySet),
    switchMap((action) => this.getEventsService.watch({
      params: {
        search: action.query,
        sort: 'modified',
        dir: 'desc',
        size: 5,
      }
    }).valueChanges),
    map(response => SearchActions.setFoundEvents(response.data.getEvents?.result as EventEntity[]))
  ));

  getArticles = createEffect(() => this.actions.pipe(
    ofType(SearchActions.searchQuerySet),
    switchMap((action) => this.getArticlesService.watch({
      params: {
        search: action.query,
        sort: 'modified',
        dir: 'desc',
        size: 5,
      }
    }).valueChanges),
    map(response => SearchActions.setFoundArticles(response.data.getArticles?.result as ArticleEntity[]))
  ));

  getOrganisations = createEffect(() => this.actions.pipe(
    ofType(SearchActions.searchQuerySet),
    switchMap((action) => this.getOrganisationsService.watch({
      params: {
        search: action.query,
        sort: 'modified',
        dir: 'desc',
        size: 5,
      }
    }).valueChanges),
    map(response => SearchActions.setFoundOrganisations(response.data.getOrganisations?.result as OrganisationEntity[]))
  ));

  getAuthors = createEffect(() => this.actions.pipe(
    ofType(SearchActions.searchQuerySet),
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
    map(response => SearchActions.setFoundAuthors(response.data.getUserContexts?.result as UserContextEntity[]))
  ));

  getDeals = createEffect(() => this.actions.pipe(
    ofType(SearchActions.searchQuerySet),
    switchMap((action) => this.getDealsService.watch({
      params: {
        search: action.query,
        sort: 'modified',
        dir: 'desc',
        size: 5,
      }
    }).valueChanges),
    map(response => SearchActions.setFoundDeals(response.data.getDeals?.result as DealEntity[]))
  ));

  getSurveys = createEffect(() => this.actions.pipe(
    ofType(SearchActions.searchQuerySet),
    switchMap((action) => this.getSurveysService.watch({
      params: {
        search: action.query,
        sort: 'modified',
        dir: 'desc',
        size: 5,
      }
    }).valueChanges),
    map(response => SearchActions.setFoundSurveys(response.data.getSurveys?.result as SurveyEntity[]))
  ));

  getContest = createEffect(() => this.actions.pipe(
    ofType(SearchActions.searchQuerySet),
    switchMap((action) => this.getContestsService.watch({
      params: {
        search: action.query,
        sort: 'modified',
        dir: 'desc',
        size: 5,
      }
    }).valueChanges),
    map(response => SearchActions.setFoundContests(response.data.getContests?.result as ContestEntity[]))
  ));

  constructor(
    private actions: Actions,
    private getSearchService: SearchGQL,
    private getEventsService: GetEventsGQL,
    private getArticlesService: GetArticlesGQL,
    private getOrganisationsService: GetOrganisationsGQL,
    private getUserContextsService: GetUserContextsGQL,
    private getDealsService: GetDealsGQL,
    private getSurveysService: GetSurveysGQL,
    private getContestsService: GetContestsGQL,
    private router: Router,
  ) { }
}
