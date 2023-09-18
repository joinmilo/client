import { createFeatureSelector, createSelector } from '@ngrx/store';
import { adminSettingsPageDetailsLayoutStateKey } from '../constants/admin-settings-page-details-layout.constants';
import { AdminSettingsPageDetailsLayoutState } from './admin-settings-page-details-layout.reducer';

export const selectAdminSettingsPageDetailsLayoutState = createFeatureSelector<AdminSettingsPageDetailsLayoutState>(adminSettingsPageDetailsLayoutStateKey);

export const selectAdminSettingsPageDetailsLayout = createSelector(
  selectAdminSettingsPageDetailsLayoutState,
  state => state.details
);
