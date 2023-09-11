import { createFeatureSelector, createSelector } from '@ngrx/store';
import { adminSettingsRoleStateKey } from '../constants/admin-settings-role.constants';
import { AdminSettingsRoleState } from './admin-settings-role.reducer';

export const selectAdminSettingsRoleState = createFeatureSelector<AdminSettingsRoleState>(adminSettingsRoleStateKey);

export const selectRoles = createSelector(
  selectAdminSettingsRoleState,
  state => state.roles
);

export const selectParams = createSelector(
  selectAdminSettingsRoleState,
  state => state.params
);
