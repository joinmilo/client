import { createReducer, on } from '@ngrx/store';
import { ArticleEntity, EventEntity, Maybe, OrganisationEntity } from 'src/schema/schema';
import { ContestEntity, DealEntity, SearchDto, SurveyEntity, UserContextEntity } from '../../../../schema/schema';
import { SearchActions } from './search.actions';

export interface SearchState {
  searchResult?: Maybe<SearchDto[]>,
  searchQuery?: Maybe<string>,

  events?: Maybe<EventEntity[]>,
  articles?: Maybe<ArticleEntity[]>,
  organisations?: Maybe<OrganisationEntity[]>,
  authors?: Maybe<UserContextEntity[]>,
  deals?: Maybe<DealEntity[]>,
  surveys?: Maybe<SurveyEntity[]>,
  contests?: Maybe<ContestEntity[]>,
  
  isSearching: boolean,
  resultPageActive: boolean,
}

export const initialState: SearchState = {
  isSearching: false,
  resultPageActive: false
};

export const searchReducer = createReducer(
  initialState,

  on(SearchActions.setSearchResult, (state, action): SearchState => (
    { ...state, searchResult: action.searchResult }
  )),

  on(SearchActions.searchQuerySet, (state, action): SearchState => (
    { ...state, searchQuery: action.query }
  )),

  on(SearchActions.navigateResultPage, (state): SearchState => (
    { ...state, resultPageActive: true }
  )),

  on(SearchActions.navigateFromResultPage, (state): SearchState => (
    { ...state, resultPageActive: false }
  )),

  on(SearchActions.setFoundEvents, (state, action): SearchState => (
    { ...state, events: action.events }
  )),

  on(SearchActions.setFoundArticles, (state, action): SearchState => (
    { ...state, articles: action.articles }
  )),

  on(SearchActions.setFoundOrganisations, (state, action): SearchState => (
    { ...state, organisations: action.organisations }
  )),

  on(SearchActions.setFoundAuthors, (state, action): SearchState => (
    { ...state, authors: action.authors }
  )),

  on(SearchActions.setFoundDeals, (state, action): SearchState => (
    { ...state, deals: action.deals }
  )),

  on(SearchActions.setFoundSurveys, (state, action): SearchState => (
    { ...state, surveys: action.surveys }
  )),

  on(SearchActions.setFoundContests, (state, action): SearchState => (
    { ...state, contests: action.contests }
  )),

  on(SearchActions.setSearchState, (state, action): SearchState => (
    { ...state, isSearching: action.isSearching }
  )),
);
