import { createReducer, on } from '@ngrx/store';
import { FilterSortPaginateInput, PageableList_PageEntity } from 'src/app/core/api/generated/schema';
import { AdminSettingsPageActions } from './admin-settings-pages.actions';

export interface AdminSettingsPageState {
  pages?: PageableList_PageEntity,
  params: FilterSortPaginateInput
}

export const initialState: AdminSettingsPageState = {
  params: {}
};

export const adminSettingsPageReducer = createReducer(
  initialState,

  on(AdminSettingsPageActions.updateParams, (state, action): AdminSettingsPageState => (
    { ...state, params: Object.assign({ ...state.params } || {}, action.params) }
  )),

  on(AdminSettingsPageActions.setOverviewData, (state, action): AdminSettingsPageState => (
    { ...state, pages: action.pages }
  )),
);
