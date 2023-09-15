import { createFeatureSelector, createSelector } from '@ngrx/store';
import { surveyAdminDetailsVisitorsStateKey } from '../constants/survey-admin-details-visitors.constants';
import { SurveyAdminDetailsVisitorsState } from './survey-admin-details-visitors.reducer';

export const selectSurveyAdminDetailsVisitorsState = createFeatureSelector<SurveyAdminDetailsVisitorsState>(surveyAdminDetailsVisitorsStateKey);

export const selectSlug = createSelector(
  selectSurveyAdminDetailsVisitorsState,
  state => state.slug
);

export const selectParams = createSelector(
  selectSurveyAdminDetailsVisitorsState,
  state => state.params
);

export const selectVisitorsStatistics = createSelector(
  selectSurveyAdminDetailsVisitorsState,
  state => state.statistics
);