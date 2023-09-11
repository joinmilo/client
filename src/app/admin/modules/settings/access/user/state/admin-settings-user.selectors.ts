import { createFeatureSelector, createSelector } from '@ngrx/store';
import { adminSettingsUserStateKey } from '../constants/admin-settings-user.constants';
import { AdminSettingsUserState } from './admin-settings-user.reducer';

export const selectAdminSettingsUserState = createFeatureSelector<AdminSettingsUserState>(adminSettingsUserStateKey);

export const selectUsers = createSelector(
  selectAdminSettingsUserState,
  state => state.users
);

export const selectParams = createSelector(
  selectAdminSettingsUserState,
  state => state.params
);
