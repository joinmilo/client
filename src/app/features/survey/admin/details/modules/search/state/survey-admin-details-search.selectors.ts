import { createFeatureSelector, createSelector } from '@ngrx/store';
import { surveyAdminDetailsSearchStateKey } from '../constants/survey-admin-details-search.constants';
import { SurveyAdminDetailsSearchState } from './survey-admin-details-search.reducer';

export const selectSurveyAdminDetailsSearchState = createFeatureSelector<SurveyAdminDetailsSearchState>(surveyAdminDetailsSearchStateKey);

export const selectSlug = createSelector(
  selectSurveyAdminDetailsSearchState,
  state => state.slug
);

export const selectParams = createSelector(
  selectSurveyAdminDetailsSearchState,
  state => state.params
);

export const selectSearchStatistics = createSelector(
  selectSurveyAdminDetailsSearchState,
  state => state.statistics
);