import { createFeatureSelector, createSelector } from '@ngrx/store';
import { adminSettingsPageDetailsLandingStateKey } from '../constants/admin-settings-page-details-landing.constants';
import { AdminSettingsPageDetailsLandingState } from './admin-settings-page-details-landing.reducer';

export const selectAdminSettingsPageDetailsLandingState = createFeatureSelector<AdminSettingsPageDetailsLandingState>(adminSettingsPageDetailsLandingStateKey);

export const selectAdminSettingsPageDetailsLanding = createSelector(
  selectAdminSettingsPageDetailsLandingState,
  state => state.details
);

export const selectAdminSettingsPageDetailsLandingMedia = createSelector(
  selectAdminSettingsPageDetailsLandingState,
  state => state.details?.uploads?.map(upload => upload?.media ?? {})
);