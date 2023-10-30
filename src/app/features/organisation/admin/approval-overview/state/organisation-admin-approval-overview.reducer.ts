import { createReducer, on } from '@ngrx/store';
import { FilterSortPaginateInput, PageableList_OrganisationEntity } from 'src/app/core/api/generated/schema';
import { OrganisationAdminApprovalOverviewActions } from './organisation-admin-approval-overview.actions';

export interface OrganisationAdminApprovalOverviewState {
  overviewData?: PageableList_OrganisationEntity,
  params: FilterSortPaginateInput,
}

export const initialState: OrganisationAdminApprovalOverviewState = {
  params: {}
};

export const guestArticleAdminOverviewReducer = createReducer(
  initialState,
  
  on(OrganisationAdminApprovalOverviewActions.updateParams, (state, action): OrganisationAdminApprovalOverviewState => (
    { ...state, params: Object.assign({ ...state.params } || {}, action.params) }
  )),

  on(OrganisationAdminApprovalOverviewActions.setOverviewData, (state, action): OrganisationAdminApprovalOverviewState => (
    { ...state, overviewData: action.organisations }
  )),
);
