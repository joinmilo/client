import { createFeatureSelector, createSelector } from '@ngrx/store';
import { transformArticlesToCards, transformAuthorsToCards, transformContestsToCards, transformDealsToCards, transformEventsToCards, transformSurveysToCards } from '../components/common.utils/card-input.utils';
import { commonFeatureKey } from '../constants/common.constants';
import { transformOrganisationsToCards } from './../components/common.utils/card-input.utils';
import { CommonState } from './common.reducer';

export const selectCommonState = createFeatureSelector<CommonState>(commonFeatureKey);

export const selectApps = createSelector(
  selectCommonState,
  state => state.apps
);

export const selectMenu = createSelector(
  selectCommonState,
  state => state.menu
);

export const selectSocialMedia = createSelector(
  selectCommonState,
  state => state.socialMedia
);

export const selectSearchResult = createSelector(
  selectCommonState,
  state => state.searchResult
);

export const selectSearchQuery = createSelector(
  selectCommonState,
  state => state.searchQuery
);

export const selectFoundEvents = createSelector(
  selectCommonState,
  state => transformEventsToCards(state.events)
);

export const selectFoundArticles = createSelector(
  selectCommonState,
  state => transformArticlesToCards(state.articles)
);

export const selectFoundOrganisations = createSelector(
  selectCommonState,
  state => transformOrganisationsToCards(state.organisations)
);

export const selectFoundAuthors = createSelector(
  selectCommonState,
  state => transformAuthorsToCards(state.authors)
);

export const selectFoundDeals = createSelector(
  selectCommonState,
  state => transformDealsToCards(state.deals)
);

export const selectFoundSurveys = createSelector(
  selectCommonState,
  state => transformSurveysToCards(state.surveys)
);

export const selectFoundContests = createSelector(
  selectCommonState,
  state => transformContestsToCards(state.contests)
);

