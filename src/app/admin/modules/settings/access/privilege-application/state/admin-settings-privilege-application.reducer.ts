import { createReducer, on } from '@ngrx/store';
import { FilterSortPaginateInput, PageableList_PrivilegeApplicationEntity, RoleEntity } from 'src/app/core/api/generated/schema';
import { AdminSettingsPrivilegeApplicationActions } from './admin-settings-privilege-application.actions';

export interface AdminSettingsPrivilegeApplicationActions {
  overviewData?: PageableList_PrivilegeApplicationEntity,
  params: FilterSortPaginateInput,
  roles?: RoleEntity[],
}

export const initialState: AdminSettingsPrivilegeApplicationActions = {
  params: {}
};

export const adminPrivilegeApplicationReducer = createReducer(
  initialState,
  
  on(AdminSettingsPrivilegeApplicationActions.updateParams, (state, action): AdminSettingsPrivilegeApplicationActions => (
    { ...state, params: Object.assign({ ...state.params } || {}, action.params) }
  )),

  on(AdminSettingsPrivilegeApplicationActions.setOverviewData, (state, action): AdminSettingsPrivilegeApplicationActions => (
    { ...state, overviewData: action.users }
  )),

  on(AdminSettingsPrivilegeApplicationActions.setOverviewData, (state, action): AdminSettingsPrivilegeApplicationActions => (
    { ...state, overviewData: action.users }
  )),

  on(AdminSettingsPrivilegeApplicationActions.rolesRetrieved, (state, action): AdminSettingsPrivilegeApplicationActions => (
    { ...state, roles: action.roles }
  )),
);
