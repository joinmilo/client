import { createFeatureSelector, createSelector } from '@ngrx/store';
import { searchStateKey } from '../constants/search.constants';
import { SearchState } from './search.reducer';

export const selectSearchState = createFeatureSelector<SearchState>(searchStateKey);

export const selectSearchResult = createSelector(
  selectSearchState,
  state => state.searchResult
);

export const selectSearchQuery = createSelector(
  selectSearchState,
  state => state.searchQuery
);

export const selectResultsPageActive = createSelector(
  selectSearchState,
  state => state.resultPageActive
);

export const selectFoundEvents = createSelector(
  selectSearchState,
  state => state.events
);

export const selectFoundArticles = createSelector(
  selectSearchState,
  state => state.articles
);

export const selectFoundOrganisations = createSelector(
  selectSearchState,
  state => state.organisations
);

export const selectFoundAuthors = createSelector(
  selectSearchState,
  state => state.authors
);

export const selectFoundDeals = createSelector(
  selectSearchState,
  state => state.deals
);

export const selectFoundSurveys = createSelector(
  selectSearchState,
  state => state.surveys
);

export const selectFoundContests = createSelector(
  selectSearchState,
  state => state.contests
);

export const selectIsSearching = createSelector(
  selectSearchState,
  state => state.isSearching
);