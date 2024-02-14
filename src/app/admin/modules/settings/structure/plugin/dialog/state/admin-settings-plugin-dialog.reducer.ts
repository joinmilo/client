import { createReducer, on } from '@ngrx/store';
import { MenuItemEntity } from 'src/app/core/api/generated/schema';
import { AdminSettingsPluginDialogActions } from './admin-settings-plugin-dialog.actions';

export interface AdminSettingsPluginDialogState {
  menuItems?: MenuItemEntity[],
}

export const initialState: AdminSettingsPluginDialogState = {
};

export const adminSettingsPluginDialogReducer = createReducer(
  initialState,

  on(AdminSettingsPluginDialogActions.menuItemsRetrieved, (state, action): AdminSettingsPluginDialogState => ({
    ...state, menuItems: action.menuItems
  })),
);
