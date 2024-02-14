import { createFeatureSelector, createSelector } from '@ngrx/store';
import { adminSettingsPluginDialogStateKey } from '../constants/admin-settings-plugin-dialog.constants';
import { AdminSettingsPluginDialogState } from './admin-settings-plugin-dialog.reducer';

export const selectAdminSettingsPluginDialogState = createFeatureSelector<AdminSettingsPluginDialogState>(adminSettingsPluginDialogStateKey);

export const selectMenuItems = createSelector(
  selectAdminSettingsPluginDialogState,
  state => state.menuItems
);
