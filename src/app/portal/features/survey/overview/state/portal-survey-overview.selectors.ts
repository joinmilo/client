import { createFeatureSelector, createSelector } from "@ngrx/store";
import { portalSurveyOverviewStateKey } from "../constants/portal-survey-overview.constant";
import { PortalSurveyOverviewState } from "./portal-survey-overview.reducer";

export const selectPortalSurveyOverviewState = createFeatureSelector<PortalSurveyOverviewState>(portalSurveyOverviewStateKey);

export const selectSurveys = createSelector(
  selectPortalSurveyOverviewState,
  state => state.surveys
);