import { createFeatureSelector, createSelector } from '@ngrx/store';
import { adminSettingsPageDetailsVisitorsStateKey } from '../constants/admin-settings-page-details-visitors.constants';
import { AdminSettingsPageDetailsVisitorsState } from './admin-settings-page-details-visitors.reducer';

export const selectAdminSettingsPageDetailsVisitorsState = createFeatureSelector<AdminSettingsPageDetailsVisitorsState>(adminSettingsPageDetailsVisitorsStateKey);

export const selectSlug = createSelector(
  selectAdminSettingsPageDetailsVisitorsState,
  state => state.slug
);

export const selectParams = createSelector(
  selectAdminSettingsPageDetailsVisitorsState,
  state => state.params
);

export const selectVisitorsStatistics = createSelector(
  selectAdminSettingsPageDetailsVisitorsState,
  state => state.statistics
);