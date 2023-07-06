import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { filter, map, switchMap, tap } from 'rxjs';
import { ArticleEntity, ConjunctionOperator, ContestEntity, DealEntity, EventEntity, GetArticlesGQL, GetContestsGQL, GetDealsGQL, GetEventsGQL, GetOrganisationsGQL, GetSurveysGQL, GetUserContextsGQL, OrganisationEntity, QueryOperator, SearchDto, SearchGQL, SurveyEntity, UserContextEntity } from 'src/schema/schema';
import { SearchActions } from './search.actions';
import { selectResultsPageActive, selectSearchQuery } from './search.selectors';

@Injectable()
export class SearchEffects {

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

  navigateResultPage = createEffect(() => this.actions.pipe(
    ofType(SearchActions.navigateResultPage),
    tap(() => this.router.navigate(['/portal', 'search', 'result'])),
  ), { dispatch: false });

  searchDetails = createEffect(() => this.actions.pipe(
    ofType(
      SearchActions.navigateResultPage,
      SearchActions.searchQuerySet
    ),
    concatLatestFrom(() => 
      this.store.select(selectResultsPageActive)
    ),
    filter(([, resultPageActive]) => resultPageActive),
    map(() => SearchActions.searchDetails()),
  ));

  getEvents = createEffect(() => this.actions.pipe(
    ofType(SearchActions.searchDetails),
    concatLatestFrom(() => 
      this.store.select(selectSearchQuery)
    ),
    switchMap(([, query]) => this.getEventsService.watch({
      params: {
        search: query,
        sort: 'modified',
        dir: 'desc',
        size: 5,
      }
    }).valueChanges),
    map(response => SearchActions.setFoundEvents(response.data.getEvents?.result as EventEntity[]))
  ));

  getArticles = createEffect(() => this.actions.pipe(
    ofType(SearchActions.searchDetails),
    concatLatestFrom(() => 
      this.store.select(selectSearchQuery)
    ),
    switchMap(([, query]) => this.getArticlesService.watch({
      params: {
        search: query,
        sort: 'modified',
        dir: 'desc',
        size: 5,
      }
    }).valueChanges),
    map(response => SearchActions.setFoundArticles(response.data.getArticles?.result as ArticleEntity[]))
  ));

  getOrganisations = createEffect(() => this.actions.pipe(
    ofType(SearchActions.searchDetails),
    concatLatestFrom(() => 
      this.store.select(selectSearchQuery)
    ),
    switchMap(([, query]) => this.getOrganisationsService.watch({
      params: {
        search: query,
        sort: 'modified',
        dir: 'desc',
        size: 5,
      }
    }).valueChanges),
    map(response => SearchActions.setFoundOrganisations(response.data.getOrganisations?.result as OrganisationEntity[]))
  ));

  getAuthors = createEffect(() => this.actions.pipe(
    ofType(SearchActions.searchDetails),
    concatLatestFrom(() => 
      this.store.select(selectSearchQuery)
    ),
    switchMap(([, query]) => this.getUserContextsService.watch({
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
                        value: query
                      }
                    },
                    {
                      entity: {
                        operator: QueryOperator.Like,
                        path: 'user.lastName',
                        value: query
                      }
                    },
                    {
                      entity: {
                        operator: QueryOperator.Like,
                        path: 'user.email',
                        value: query
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
    ofType(SearchActions.searchDetails),
    concatLatestFrom(() => 
      this.store.select(selectSearchQuery)
    ),
    switchMap(([, query]) => this.getDealsService.watch({
      params: {
        search: query,
        sort: 'modified',
        dir: 'desc',
        size: 5,
      }
    }).valueChanges),
    map(response => SearchActions.setFoundDeals(response.data.getDeals?.result as DealEntity[]))
  ));

  getSurveys = createEffect(() => this.actions.pipe(
    ofType(SearchActions.searchDetails),
    concatLatestFrom(() => 
      this.store.select(selectSearchQuery)
    ),
    switchMap(([, query]) => this.getSurveysService.watch({
      params: {
        search: query,
        sort: 'modified',
        dir: 'desc',
        size: 5,
      }
    }).valueChanges),
    map(response => SearchActions.setFoundSurveys(response.data.getSurveys?.result as SurveyEntity[]))
  ));

  getContest = createEffect(() => this.actions.pipe(
    ofType(SearchActions.searchDetails),
    concatLatestFrom(() => 
      this.store.select(selectSearchQuery)
    ),
    switchMap(([, query]) => this.getContestsService.watch({
      params: {
        search: query,
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
    private store: Store,
  ) { }
}
