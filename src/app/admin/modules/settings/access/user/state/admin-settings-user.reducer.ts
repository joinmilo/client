import { createReducer, on } from '@ngrx/store';
import { FilterSortPaginateInput, PageableList_UserEntity } from 'src/app/core/api/generated/schema';
import { AdminSettingsUserActions } from './admin-settings-user.actions';

export interface AdminSettingsUserState {
  users?: PageableList_UserEntity,
  params: FilterSortPaginateInput
}

export const initialState: AdminSettingsUserState = {
  params: {}
};

export const adminSettingsUserReducer = createReducer(
  initialState,

  on(AdminSettingsUserActions.updateParams, (state, action): AdminSettingsUserState => (
    { ...state, params: Object.assign({ ...state.params } || {}, action.params) }
  )),

  on(AdminSettingsUserActions.setOverviewData, (state, action): AdminSettingsUserState => (
    { ...state, users: action.users }
  )),
);
