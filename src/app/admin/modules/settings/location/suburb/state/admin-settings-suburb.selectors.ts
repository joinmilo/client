import { createFeatureSelector, createSelector } from '@ngrx/store';
import { adminSettingsSuburbStateKey } from '../constants/admin-settings-suburb.constants';
import { AdminSettingsSuburbState } from './admin-settings-suburb.reducer';


export const selectAdminSettingsSuburbState = createFeatureSelector<AdminSettingsSuburbState>(adminSettingsSuburbStateKey);

export const selectSuburbs = createSelector(
  selectAdminSettingsSuburbState,
  state => state.overviewData
);

export const selectParams = createSelector(
  selectAdminSettingsSuburbState,
  state => state.params
);
