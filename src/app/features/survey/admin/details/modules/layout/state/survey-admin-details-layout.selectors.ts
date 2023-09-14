import { createFeatureSelector, createSelector } from '@ngrx/store';
import { surveyAdminDetailsLayoutStateKey } from '../constants/survey-admin-details-layout.constants';
import { SurveyAdminDetailsLayoutState } from './survey-admin-details-layout.reducer';

export const selectSurveyAdminDetailsLayoutState = createFeatureSelector<SurveyAdminDetailsLayoutState>(surveyAdminDetailsLayoutStateKey);

export const selectSurveyAdminDetailsLayout = createSelector(
  selectSurveyAdminDetailsLayoutState,
  state => state.details
);
