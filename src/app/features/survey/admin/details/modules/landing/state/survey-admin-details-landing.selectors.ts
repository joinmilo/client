import { createFeatureSelector, createSelector } from '@ngrx/store';
import { eventAdminDetailsLandingStateKey } from '../constants/survey-admin-details-landing.constants';
import { SurveyAdminDetailsLandingState } from './survey-admin-details-landing.reducer';

export const selectSurveyAdminDetailsLandingState = createFeatureSelector<SurveyAdminDetailsLandingState>(eventAdminDetailsLandingStateKey);

export const selectSurveyAdminDetailsLanding = createSelector(
  selectSurveyAdminDetailsLandingState,
  state => state.details
);

export const selectSurveyAdminDetailsLandingMedia = createSelector(
  selectSurveyAdminDetailsLandingState,
  state => state.details?.uploads?.map(upload => upload?.media ?? {})
);
