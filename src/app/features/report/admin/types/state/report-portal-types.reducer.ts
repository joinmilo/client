import { createReducer, on } from '@ngrx/store';
import { FilterSortPaginateInput, PageableList_ReportTypeEntity } from 'src/app/core/api/generated/schema';
import { ReportAdminTypesActions } from './report-admin-types.actions';

export interface ReportAdminTypesState {
  typesData?: PageableList_ReportTypeEntity,
  params: FilterSortPaginateInput,
}

export const initialState: ReportAdminTypesState = {
  params: {}
};

export const reportAdminTypesReducer = createReducer(
  initialState,
  
  on(ReportAdminTypesActions.updateParams, (state, action): ReportAdminTypesState => (
    { ...state, params: Object.assign({ ...state.params } || {}, action.params) }
  )),

  on(ReportAdminTypesActions.setTypesData, (state, action): ReportAdminTypesState => (
    { ...state, typesData: action.reports }
  )),
);
