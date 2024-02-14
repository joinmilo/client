import { createReducer, on } from '@ngrx/store';
import { FilterSortPaginateInput, MenuItemEntity, PageableList_PluginEntity } from 'src/app/core/api/generated/schema';
import { AdminSettingsPluginOverviewActions } from './admin-settings-plugin-overview.actions';

export interface AdminSettingsPluginOverviewState {
  plugins?: PageableList_PluginEntity,
  params: FilterSortPaginateInput,
  menuItems?: MenuItemEntity[],
}

export const initialState: AdminSettingsPluginOverviewState = {
  params: {}
};

export const adminSettingsPluginOverviewReducer = createReducer(
  initialState,

  on(AdminSettingsPluginOverviewActions.updateParams, (state, action): AdminSettingsPluginOverviewState => (
    { ...state, params: Object.assign({ ...state.params } || {}, action.params) }
  )),

  on(AdminSettingsPluginOverviewActions.setOverviewData, (state, action): AdminSettingsPluginOverviewState => (
    { ...state, plugins: action.plugins }
  )),
);
