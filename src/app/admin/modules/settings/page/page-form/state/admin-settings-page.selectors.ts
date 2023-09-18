import { createFeatureSelector, createSelector } from '@ngrx/store';
import { adminSettingsPageStateKey } from '../admin-settings-page-form.constants';
import { AdminSettingsPageState } from './admin-settings-page.reducer';

export const selectAdminSettingsPageState = createFeatureSelector<AdminSettingsPageState>(adminSettingsPageStateKey);

export const selectSavedPage = createSelector(
  selectAdminSettingsPageState,
  state => state.savedPage
);