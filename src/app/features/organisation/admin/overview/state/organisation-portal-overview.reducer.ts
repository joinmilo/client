import { createReducer, on } from '@ngrx/store';
import { FilterSortPaginateInput, PageableList_OrganisationEntity } from 'src/schema/schema';
import { OrganisationAdminOverviewActions } from './organisation-admin-overview.actions';

export interface OrganisationAdminOverviewState {
  overviewData?: PageableList_OrganisationEntity,
  params: FilterSortPaginateInput
}

export const initialState: OrganisationAdminOverviewState = {
  params: {}
};

export const organisationAdminOverviewReducer = createReducer(
  initialState,

  on(OrganisationAdminOverviewActions.updateParams, (state, action): OrganisationAdminOverviewState => (
    { ...state, params: Object.assign({ ...state.params } || {}, action.params) }
  )),

  on(OrganisationAdminOverviewActions.setOverviewData, (state, action): OrganisationAdminOverviewState => (
    { ...state, overviewData: action.organisations }
  )),
);
