import { createReducer, on } from '@ngrx/store';
import { FilterSortPaginateInput, PageableList_DealEntity } from 'src/schema/schema';
import { DealAdminOverviewActions } from './survey-admin-overview.actions';

export interface DealAdminOverviewState {
  overviewData?: PageableList_DealEntity,
  params: FilterSortPaginateInput
}

export const initialState: DealAdminOverviewState = {
  params: {}
};

export const dealAdminOverviewReducer = createReducer(
  initialState,

  on(DealAdminOverviewActions.updateParams, (state, action): DealAdminOverviewState => (
    { ...state, params: Object.assign({ ...state.params } || {}, action.params) }
  )),

  on(DealAdminOverviewActions.setOverviewData, (state, action): DealAdminOverviewState => (
    { ...state, overviewData: action.deals }
  )),
);
