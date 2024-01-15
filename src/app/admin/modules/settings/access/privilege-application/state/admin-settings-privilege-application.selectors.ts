import { createFeatureSelector, createSelector } from '@ngrx/store';

import { adminSettingsPrivilegeApplicationStateKey } from '../constants/admin-settings-privilege-application.constants';
import { AdminSettingsPrivilegeApplicationActions } from './admin-settings-privilege-application.reducer';


export const selectAdminSettingsPrivilegeApplicationState = createFeatureSelector<AdminSettingsPrivilegeApplicationActions>(adminSettingsPrivilegeApplicationStateKey);

export const selectOverviewData = createSelector(
  selectAdminSettingsPrivilegeApplicationState,
  state => state.overviewData
);

export const selectParams = createSelector(
  selectAdminSettingsPrivilegeApplicationState,
  state => state.params
);

export const selectRoles = createSelector(
  selectAdminSettingsPrivilegeApplicationState,
  state => state.roles
);
