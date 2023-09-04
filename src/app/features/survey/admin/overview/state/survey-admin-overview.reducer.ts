import { createReducer, on } from '@ngrx/store';
import { FilterSortPaginateInput, PageableList_SurveyEntity } from 'src/app/core/api/generated/schema';
import { SurveyAdminOverviewActions } from './survey-admin-overview.actions';

export interface SurveyAdminOverviewState {
  overviewData?: PageableList_SurveyEntity,
  params: FilterSortPaginateInput
}

export const initialState: SurveyAdminOverviewState = {
  params: {}
};

export const surveyAdminOverviewReducer = createReducer(
  initialState,

  on(SurveyAdminOverviewActions.updateParams, (state, action): SurveyAdminOverviewState => (
    { ...state, params: Object.assign({ ...state.params } || {}, action.params) }
  )),

  on(SurveyAdminOverviewActions.setOverviewData, (state, action): SurveyAdminOverviewState => (
    { ...state, overviewData: action.surveys }
  )),
);
