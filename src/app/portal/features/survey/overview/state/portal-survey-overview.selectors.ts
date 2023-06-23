import { createFeatureSelector, createSelector } from "@ngrx/store";
import { portalSurveyOverviewStateKey } from "../constants/portal-survey-overview.constant";
import { PortalSurveyOverviewState } from "./portal-survey-overview.reducer";

export const selectPortalSurveyOverviewState = createFeatureSelector<PortalSurveyOverviewState>(portalSurveyOverviewStateKey);

export const selectSponsoredSurvey = createSelector(
  selectPortalSurveyOverviewState,
  state => state.sponsoredSurvey
);

export const selectSurveyCards = createSelector(
  selectPortalSurveyOverviewState,
  state => state.surveys
);

export const selectParams = createSelector(
  selectPortalSurveyOverviewState,
  state => state.params
);

export const selectRawParams = createSelector(
  selectPortalSurveyOverviewState,
  state => state.rawFilterParams
);