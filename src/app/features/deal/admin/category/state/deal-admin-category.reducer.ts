import { createReducer, on } from '@ngrx/store';
import { FilterSortPaginateInput, PageableList_DealCategoryEntity } from 'src/app/core/api/generated/schema';
import { DealAdminCategoryActions } from './deal-admin-category.actions';

export interface DealAdminCategoryState {
  categoryData?: PageableList_DealCategoryEntity,
  params: FilterSortPaginateInput,
}

export const initialState: DealAdminCategoryState = {
  params: {}
};

export const dealAdminCategoryReducer = createReducer(
  initialState,
  
  on(DealAdminCategoryActions.updateParams, (state, action): DealAdminCategoryState => (
    { ...state, params: Object.assign({ ...state.params } || {}, action.params) }
  )),

  on(DealAdminCategoryActions.setCategoryData, (state, action): DealAdminCategoryState => (
    { ...state, categoryData: action.categories }
  )),
);
