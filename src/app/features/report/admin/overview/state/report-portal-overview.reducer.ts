import { createReducer, on } from '@ngrx/store';
import { FilterSortPaginateInput, PageableList_ReportEntity } from 'src/app/core/api/generated/schema';
import { ReportAdminOverviewActions } from './report-admin-overview.actions';

export interface ReportAdminOverviewState {
  overviewData?: PageableList_ReportEntity,
  params: FilterSortPaginateInput,
}

export const initialState: ReportAdminOverviewState = {
  params: {}
};

export const reportAdminOverviewReducer = createReducer(
  initialState,
  
  on(ReportAdminOverviewActions.updateParams, (state, action): ReportAdminOverviewState => (
    { ...state, params: Object.assign({ ...state.params } || {}, action.params) }
  )),

  on(ReportAdminOverviewActions.setOverviewData, (state, action): ReportAdminOverviewState => (
    { ...state, overviewData: action.reports }
  )),
);
