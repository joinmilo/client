import { createReducer, on } from '@ngrx/store';
import { FilterSortPaginateInput, MenuItemEntity, PageableList_PluginEntity } from 'src/app/core/api/generated/schema';
import { AdminSettingsPluginActions } from './admin-settings-plugin.actions';

export interface AdminSettingsPluginState {
  plugins?: PageableList_PluginEntity,
  params: FilterSortPaginateInput,
  menuItems?: MenuItemEntity[],
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

  on(AdminSettingsPluginActions.menuItemsRetrieved, (state, action): AdminSettingsPluginState => ({
    ...state, menuItems: action.menuItems
  })),
);
