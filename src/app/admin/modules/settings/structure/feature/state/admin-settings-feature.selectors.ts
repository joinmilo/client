import { createFeatureSelector, createSelector } from '@ngrx/store';
import { adminSettingsFeatureStateKey } from '../constants/admin-settings-feature.constants';
import { AdminSettingsFeatureState } from './admin-settings-feature.reducer';

export const selectAdminSettingsFeatureState = createFeatureSelector<AdminSettingsFeatureState>(adminSettingsFeatureStateKey);

export const selectFeatures = createSelector(
  selectAdminSettingsFeatureState,
  state => state.features
);

export const selectParams = createSelector(
  selectAdminSettingsFeatureState,
  state => state.params
);
