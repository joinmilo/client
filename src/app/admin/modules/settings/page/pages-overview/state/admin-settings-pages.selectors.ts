import { createFeatureSelector, createSelector } from '@ngrx/store';

import { adminSettingsPageStateKey } from '../constants/admin-settings-pages.constants';
import { AdminSettingsPageState } from './admin-settings-pages.reducer';

export const selectAdminSettingsPagesState = createFeatureSelector<AdminSettingsPageState>(adminSettingsPageStateKey);

export const selectPages = createSelector(
  selectAdminSettingsPagesState,
  state => state.pages
);

export const selectParams = createSelector(
  selectAdminSettingsPagesState,
  state => state.params
);
