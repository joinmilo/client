import { createFeatureSelector, createSelector } from '@ngrx/store';
import { organisationAdminDetailsApplicationsStateKey } from '../constants/organisation-admin-details-applications.constants';
import { OrganisationAdminDetailsApplicationsState } from './organisation-admin-details-applications.reducer';

export const selectOrganisationAdminDetailsApplicationsState = createFeatureSelector<OrganisationAdminDetailsApplicationsState>(organisationAdminDetailsApplicationsStateKey);

export const selectOrganisationAdminDetailsApplications = createSelector(
  selectOrganisationAdminDetailsApplicationsState,
  state => state.members
);

export const selectSlug = createSelector(
  selectOrganisationAdminDetailsApplicationsState,
  state => state.slug
);

export const selectParams = createSelector(
  selectOrganisationAdminDetailsApplicationsState,
  state => state.params
);