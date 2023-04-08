import { createFeatureSelector, createSelector } from '@ngrx/store';
import { transformArticlesToCards, transformAuthorsToCards, transformContestsToCards, transformDealsToCards, transformEventsToCards, transformOrganisationsToCards, transformSurveysToCards } from '../../../core/utils/card.utils';
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
  state => transformEventsToCards(state.events)
);

export const selectFoundArticles = createSelector(
  selectSearchState,
  state => transformArticlesToCards(state.articles)
);

export const selectFoundOrganisations = createSelector(
  selectSearchState,
  state => transformOrganisationsToCards(state.organisations)
);

export const selectFoundAuthors = createSelector(
  selectSearchState,
  state => transformAuthorsToCards(state.authors)
);

export const selectFoundDeals = createSelector(
  selectSearchState,
  state => transformDealsToCards(state.deals)
);

export const selectFoundSurveys = createSelector(
  selectSearchState,
  state => transformSurveysToCards(state.surveys)
);

export const selectFoundContests = createSelector(
  selectSearchState,
  state => transformContestsToCards(state.contests)
);

export const selectIsSearching = createSelector(
  selectSearchState,
  state => state.isSearching
);