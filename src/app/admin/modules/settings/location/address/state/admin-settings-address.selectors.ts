import { createFeatureSelector, createSelector } from '@ngrx/store';
import { adminSettingsAddressStateKey } from '../constants/admin-settings-address.constants';
import { AdminSettingsAddressState } from './admin-settings-address.reducer';

export const selectAdminSettingsAddressState = createFeatureSelector<AdminSettingsAddressState>(adminSettingsAddressStateKey);

export const selectAddresses = createSelector(
  selectAdminSettingsAddressState,
  state => state.addresses
);

export const selectParams = createSelector(
  selectAdminSettingsAddressState,
  state => state.params
);
