import { createFeatureSelector, createSelector } from '@ngrx/store';
import { surveyPageFeatureStateKey } from '../constants/survey-page-feature.constants';
import { SurveyPageFeatureState } from './survey-page-feature.reducer';

export const selectSurveyPageFeatureState = createFeatureSelector<SurveyPageFeatureState>(surveyPageFeatureStateKey);

export const selectRecentSurveys = createSelector(
  selectSurveyPageFeatureState,
  state => state.recentSurveys
);