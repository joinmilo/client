import { createReducer, on } from "@ngrx/store";
import { SurveyFilterQueryParams } from 'src/app/core/typings/filter-param';
import { FilterSortPaginateInput, Maybe, PageableList_SurveyEntity, SurveyEntity } from "src/schema/schema";
import { PortalSurveyOverviewActions } from "./portal-survey-overview.actions";

export interface PortalSurveyOverviewState {
  rawFilterParams: SurveyFilterQueryParams;
  sponsoredSurvey?: Maybe<SurveyEntity>,
  surveys?: Maybe<PageableList_SurveyEntity>,
  params: FilterSortPaginateInput,
}

export const initialState: PortalSurveyOverviewState = {
  params: {},
  rawFilterParams: { }
};

export const portalSurveyOverviewReducer = createReducer(
  initialState,

  on(PortalSurveyOverviewActions.setSponsoredSurvey, (state, action): PortalSurveyOverviewState => (
    { ...state, sponsoredSurvey: action.survey}
  )),

  on(PortalSurveyOverviewActions.updateParams, (state, action): PortalSurveyOverviewState => (
    { ...state, params: Object.assign({ ...state.params } || {}, action.params) }
  )),

  on(PortalSurveyOverviewActions.updateRawParams, (state, action): PortalSurveyOverviewState => (
    { ...state, rawFilterParams: action.params }
  )),

  on(PortalSurveyOverviewActions.setOverviewData, (state, action): PortalSurveyOverviewState => (
    { ...state, surveys: action.surveys}
  )),
);