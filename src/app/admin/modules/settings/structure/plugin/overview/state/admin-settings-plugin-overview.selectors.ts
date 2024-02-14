import { createFeatureSelector, createSelector } from '@ngrx/store';

import { adminSettingsPluginOverviewStateKey } from '../constants/admin-settings-plugin-overview.constants';
import { AdminSettingsPluginOverviewState } from './admin-settings-plugin-overview.reducer';

export const selectAdminSettingsPluginOverviewState = createFeatureSelector<AdminSettingsPluginOverviewState>(adminSettingsPluginOverviewStateKey);

export const selectPlugins = createSelector(
  selectAdminSettingsPluginOverviewState,
  state => state.plugins
);

export const selectParams = createSelector(
  selectAdminSettingsPluginOverviewState,
  state => state.params
);
