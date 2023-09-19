import { createReducer, on } from '@ngrx/store';
import { FilterSortPaginateInput, PageableList_EventCategoryEntity } from 'src/app/core/api/generated/schema';
import { EventAdminCategoryActions } from './event-admin-category.actions';

export interface EventAdminCategoryState {
  categoryData?: PageableList_EventCategoryEntity,
  params: FilterSortPaginateInput,
}

export const initialState: EventAdminCategoryState = {
  params: {}
};

export const eventAdminCategoryReducer = createReducer(
  initialState,
  
  on(EventAdminCategoryActions.updateParams, (state, action): EventAdminCategoryState => (
    { ...state, params: Object.assign({ ...state.params } || {}, action.params) }
  )),

  on(EventAdminCategoryActions.setCategoryData, (state, action): EventAdminCategoryState => (
    { ...state, categoryData: action.categories }
  )),
);
