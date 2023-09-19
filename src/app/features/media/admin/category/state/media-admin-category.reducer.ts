import { createReducer, on } from '@ngrx/store';
import { FilterSortPaginateInput, PageableList_InfoMediaCategoryEntity } from 'src/app/core/api/generated/schema';
import { MediaAdminCategoryActions } from './media-admin-category.actions';

export interface MediaAdminCategoryState {
  categoryData?: PageableList_InfoMediaCategoryEntity,
  params: FilterSortPaginateInput,
}

export const initialState: MediaAdminCategoryState = {
  params: {}
};

export const mediaAdminCategoryReducer = createReducer(
  initialState,
  
  on(MediaAdminCategoryActions.updateParams, (state, action): MediaAdminCategoryState => (
    { ...state, params: Object.assign({ ...state.params } || {}, action.params) }
  )),

  on(MediaAdminCategoryActions.setCategoryData, (state, action): MediaAdminCategoryState => (
    { ...state, categoryData: action.categories }
  )),
);
