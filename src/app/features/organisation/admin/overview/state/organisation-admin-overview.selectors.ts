import { createFeatureSelector, createSelector } from '@ngrx/store';
import { organisationAdminOverviewStateKey } from '../constants/organisation-admin-overview.constants';
import { OrganisationAdminOverviewState } from './organisation-admin-overview.reducer';

export const selectOrganisationAdminOverviewState = createFeatureSelector<OrganisationAdminOverviewState>(organisationAdminOverviewStateKey);

export const selectOverviewData = createSelector(
  selectOrganisationAdminOverviewState,
  state => state.overviewData
);

export const selectParams = createSelector(
  selectOrganisationAdminOverviewState,
  state => state.params
);
