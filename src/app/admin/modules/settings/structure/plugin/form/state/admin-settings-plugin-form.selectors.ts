import { createFeatureSelector, createSelector } from '@ngrx/store';
import { adminSettingsPluginFormStateKey } from '../constants/admin-settings-plugin-form.constants';
import { AdminSettingsPluginFormState } from './admin-settings-plugin-form.reducer';

export const selectAdminSettingsPluginFormState = createFeatureSelector<AdminSettingsPluginFormState>(adminSettingsPluginFormStateKey);

export const selectPlugin = createSelector(
  selectAdminSettingsPluginFormState,
  state => state.plugin
);
