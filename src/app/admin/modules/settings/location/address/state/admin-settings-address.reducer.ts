import { createReducer, on } from '@ngrx/store';
import { FilterSortPaginateInput, PageableList_AddressEntity } from 'src/app/core/api/generated/schema';
import { AdminSettingsAddressActions } from './admin-settings-address.actions';

export interface AdminSettingsAddressState {
  addresses?: PageableList_AddressEntity,
  params: FilterSortPaginateInput
}

export const initialState: AdminSettingsAddressState = {
  params: {}
};

export const adminSettingsAddressReducer = createReducer(
  initialState,

  on(AdminSettingsAddressActions.updateParams, (state, action): AdminSettingsAddressState => (
    { ...state, params: Object.assign({ ...state.params } || {}, action.params) }
  )),

  on(AdminSettingsAddressActions.setOverviewData, (state, action): AdminSettingsAddressState => (
    { ...state, addresses: action.addresss }
  )),
);
