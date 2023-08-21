import { createFeatureSelector, createSelector } from '@ngrx/store';
import { OrganisationAdminOverviewState } from './organisation-portal-overview.reducer';
import { organisationAdminOverviewStateKey } from '../constants/organisation-admin-overview.constants';

export const selectOrganisationAdminOverviewState = createFeatureSelector<OrganisationAdminOverviewState>(organisationAdminOverviewStateKey);

export const selectOverviewData = createSelector(
  selectOrganisationAdminOverviewState,
  state => state.overviewData
);

export const selectParams = createSelector(
  selectOrganisationAdminOverviewState,
  state => state.params
);
