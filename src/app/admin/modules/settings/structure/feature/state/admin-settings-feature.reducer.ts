import { createReducer, on } from '@ngrx/store';
import { FilterSortPaginateInput, PageableList_FeatureEntity } from 'src/app/core/api/generated/schema';
import { AdminSettingsFeatureActions } from './admin-settings-feature.actions';

export interface AdminSettingsFeatureState {
  features?: PageableList_FeatureEntity,
  params: FilterSortPaginateInput
}

export const initialState: AdminSettingsFeatureState = {
  params: {}
};

export const adminSettingsFeatureReducer = createReducer(
  initialState,

  on(AdminSettingsFeatureActions.updateParams, (state, action): AdminSettingsFeatureState => (
    { ...state, params: Object.assign({ ...state.params } || {}, action.params) }
  )),

  on(AdminSettingsFeatureActions.setOverviewData, (state, action): AdminSettingsFeatureState => (
    { ...state, features: action.features }
  )),
);
