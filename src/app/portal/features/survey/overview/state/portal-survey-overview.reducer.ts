import { createReducer, on } from "@ngrx/store";
import { SurveyEntity } from "src/schema/schema";
import { PortalSurveyOverviewActions } from "./portal-survey-overview.actions";

export interface PortalSurveyOverviewState {
  surveys?: SurveyEntity[],
}

export const initialState: PortalSurveyOverviewState = { };

export const portalSurveyOverviewReducer = createReducer(
  initialState,

  on(PortalSurveyOverviewActions.setSurveys, (state, action): PortalSurveyOverviewState => (
    { ...state, surveys: action.surveys}
  ))

);