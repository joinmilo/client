import { createFeatureSelector, createSelector } from '@ngrx/store';
import { adminSettingsPageDetailsSearchStateKey } from '../constants/admin-settings-page-details-search.constants';
import { AdminSettingsPageDetailsSearchState } from './admin-settings-page-details-search.reducer';

export const selectAdminSettingsPageDetailsSearchState = createFeatureSelector<AdminSettingsPageDetailsSearchState>(adminSettingsPageDetailsSearchStateKey);

export const selectSlug = createSelector(
  selectAdminSettingsPageDetailsSearchState,
  state => state.slug
);

export const selectParams = createSelector(
  selectAdminSettingsPageDetailsSearchState,
  state => state.params
);

export const selectSearchStatistics = createSelector(
  selectAdminSettingsPageDetailsSearchState,
  state => state.statistics
);