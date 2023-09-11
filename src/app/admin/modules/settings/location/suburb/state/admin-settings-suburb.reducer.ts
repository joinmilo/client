import { createReducer, on } from '@ngrx/store';
import { FilterSortPaginateInput, PageableList_SuburbEntity } from 'src/app/core/api/generated/schema';
import { AdminSettingsSuburbActions } from './admin-settings-suburb.actions';

export interface AdminSettingsSuburbState {
  overviewData?: PageableList_SuburbEntity,
  params: FilterSortPaginateInput
}

export const initialState: AdminSettingsSuburbState = {
  params: {}
};

export const adminSettingsSuburbReducer = createReducer(
  initialState,

  on(AdminSettingsSuburbActions.updateParams, (state, action): AdminSettingsSuburbState => (
    { ...state, params: Object.assign({ ...state.params } || {}, action.params) }
  )),

  on(AdminSettingsSuburbActions.setOverviewData, (state, action): AdminSettingsSuburbState => (
    { ...state, overviewData: action.suburbs }
  )),
);
