import { createFeatureSelector, createSelector } from '@ngrx/store';
import { adminSettingsLanguageStateKey } from '../constants/admin-settings-language.constants';
import { AdminSettingsLanguageState } from './admin-settings-language.reducer';

export const selectAdminSettingsLanguageState = createFeatureSelector<AdminSettingsLanguageState>(adminSettingsLanguageStateKey);

export const selectLanguages = createSelector(
  selectAdminSettingsLanguageState,
  state => state.languages
);

export const selectParams = createSelector(
  selectAdminSettingsLanguageState,
  state => state.params
);
