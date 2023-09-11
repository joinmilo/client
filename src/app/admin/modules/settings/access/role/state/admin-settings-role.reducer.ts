import { createReducer, on } from '@ngrx/store';
import { FilterSortPaginateInput, PageableList_RoleEntity } from 'src/app/core/api/generated/schema';
import { AdminSettingsRoleActions } from './admin-settings-role.actions';

export interface AdminSettingsRoleState {
  roles?: PageableList_RoleEntity,
  params: FilterSortPaginateInput
}

export const initialState: AdminSettingsRoleState = {
  params: {}
};

export const adminSettingsRoleReducer = createReducer(
  initialState,

  on(AdminSettingsRoleActions.updateParams, (state, action): AdminSettingsRoleState => (
    { ...state, params: Object.assign({ ...state.params } || {}, action.params) }
  )),

  on(AdminSettingsRoleActions.setOverviewData, (state, action): AdminSettingsRoleState => (
    { ...state, roles: action.roles }
  )),
);
