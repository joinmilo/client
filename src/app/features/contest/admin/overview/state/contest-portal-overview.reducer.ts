import { createReducer, on } from '@ngrx/store';
import { FilterSortPaginateInput, PageableList_ContestEntity} from 'src/schema/schema';
import { ContestAdminOverviewActions } from './contest-admin-overview.actions';

export interface ContestAdminOverviewState {
  overviewData?: PageableList_ContestEntity,
  params: FilterSortPaginateInput
}

export const initialState: ContestAdminOverviewState = {
  params: {}
};

export const contestAdminOverviewReducer = createReducer(
  initialState,

  on(ContestAdminOverviewActions.updateParams, (state, action): ContestAdminOverviewState => (
    { ...state, params: Object.assign({ ...state.params } || {}, action.params) }
  )),

  on(ContestAdminOverviewActions.setOverviewData, (state, action): ContestAdminOverviewState => (
    { ...state, overviewData: action.contests }
  )),
);
