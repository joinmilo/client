import { createFeatureSelector, createSelector } from '@ngrx/store';
import { surveyAdminOverviewStateKey } from '../constants/survey-admin-overview.constants';
import { SurveyAdminOverviewState } from './survey-admin-overview.reducer';

export const selectSurveyAdminOverviewState = createFeatureSelector<SurveyAdminOverviewState>(surveyAdminOverviewStateKey);

export const selectOverviewData = createSelector(
  selectSurveyAdminOverviewState,
  state => state.overviewData
);

export const selectParams = createSelector(
  selectSurveyAdminOverviewState,
  state => state.params
);
