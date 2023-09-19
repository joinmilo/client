import { createReducer, on } from '@ngrx/store';
import { FilterSortPaginateInput, PageableList_ContestTypeEntity } from 'src/app/core/api/generated/schema';
import { ContestAdminTypesActions } from './contest-admin-types.actions';

export interface ContestAdminTypesState {
  typesData?: PageableList_ContestTypeEntity,
  params: FilterSortPaginateInput,
}

export const initialState: ContestAdminTypesState = {
  params: {}
};

export const contestAdminTypesReducer = createReducer(
  initialState,
  
  on(ContestAdminTypesActions.updateParams, (state, action): ContestAdminTypesState => (
    { ...state, params: Object.assign({ ...state.params } || {}, action.params) }
  )),

  on(ContestAdminTypesActions.setTypesData, (state, action): ContestAdminTypesState => (
    { ...state, typesData: action.contests }
  )),
);
