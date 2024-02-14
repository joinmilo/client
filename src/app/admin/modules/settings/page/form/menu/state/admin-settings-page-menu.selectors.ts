import { createFeatureSelector, createSelector } from '@ngrx/store';
import { adminSettingsPageMenuStateKey } from '../constants/admin-settings-page-menu.constants';
import { AdminSettingsPageMenuState } from './admin-settings-page-menu.reducer';

export const selectAdminSettingsPageMenuState = createFeatureSelector<AdminSettingsPageMenuState>(adminSettingsPageMenuStateKey);

export const selectParentMenuItems = createSelector(
  selectAdminSettingsPageMenuState,
  state => state.parentMenuItems
);