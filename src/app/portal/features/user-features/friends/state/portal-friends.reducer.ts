import { createReducer, on } from "@ngrx/store";
import { FilterSortPaginateInput, Maybe, PageableList_SurveyEntity } from "src/schema/schema";
import { PortalSurveyOverviewActions } from "./portal-friends.actions";

export interface PortalSurveyOverviewState {
  surveys?: Maybe<PageableList_SurveyEntity>,
  params: FilterSortPaginateInput,
}

export const initialState: PortalSurveyOverviewState = {
};


export const portalSurveyOverviewReducer = createReducer(
  initialState,

  on(PortalSurveyOverviewActions.setSponsoredSurvey, (state, action): PortalSurveyOverviewState => (
    { ...state, sponsoredSurvey: action.survey}
  )),

  on(PortalSurveyOverviewActions.setOverviewData, (state, action): PortalSurveyOverviewState => (
    { ...state, surveys: action.surveys}
  )),
);