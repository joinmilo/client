import { createFeatureSelector, createSelector } from '@ngrx/store';
import { organisationAdminApprovalOverviewStateKey } from '../constants/organisation-admin-approval-overview.constants';
import { OrganisationAdminApprovalOverviewState } from './organisation-admin-approval-overview.reducer';

export const selectOrganisationAdminApprovalOverviewState = createFeatureSelector<OrganisationAdminApprovalOverviewState>(organisationAdminApprovalOverviewStateKey);

export const selectOverviewData = createSelector(
  selectOrganisationAdminApprovalOverviewState,
  state => state.overviewData
);

export const selectParams = createSelector(
  selectOrganisationAdminApprovalOverviewState,
  state => state.params
);