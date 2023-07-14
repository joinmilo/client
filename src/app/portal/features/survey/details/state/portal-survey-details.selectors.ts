import { createFeatureSelector, createSelector } from '@ngrx/store';
import { portalSurveyDetailsStateKey } from '../constants/survey-details.constant';
import { PortalSurveyDetailsState } from './portal-survey-details.reducer';

export const selectPortalSurveyDetailsState = createFeatureSelector<PortalSurveyDetailsState>(portalSurveyDetailsStateKey);

export const selectSurveyDetails = createSelector(
  selectPortalSurveyDetailsState,
  state => state.details
);
