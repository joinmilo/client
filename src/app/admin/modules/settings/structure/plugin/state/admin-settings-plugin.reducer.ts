import { createReducer, on } from '@ngrx/store';
import { FilterSortPaginateInput, PageableList_PluginEntity } from 'src/app/core/api/generated/schema';
import { AdminSettingsPluginActions } from './admin-settings-plugin.actions';

export interface AdminSettingsPluginState {
  plugins?: PageableList_PluginEntity,
  params: FilterSortPaginateInput
}

export const initialState: AdminSettingsPluginState = {
  params: {}
};

export const adminSettingsPluginReducer = createReducer(
  initialState,

  on(AdminSettingsPluginActions.updateParams, (state, action): AdminSettingsPluginState => (
    { ...state, params: Object.assign({ ...state.params } || {}, action.params) }
  )),

  on(AdminSettingsPluginActions.setOverviewData, (state, action): AdminSettingsPluginState => (
    { ...state, plugins: action.plugins }
  )),
);
