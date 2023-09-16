import { createFeatureSelector, createSelector } from '@ngrx/store';
import { organisationAdminDetailsMembersStateKey } from '../constants/organisation-admin-details-members.constants';
import { OrganisationAdminDetailsMembersState } from './organisation-admin-details-members.reducer';

export const selectOrganisationAdminDetailsMembersState = createFeatureSelector<OrganisationAdminDetailsMembersState>(organisationAdminDetailsMembersStateKey);

export const selectOrganisationAdminDetailsMembers = createSelector(
  selectOrganisationAdminDetailsMembersState,
  state => state.members
);

export const selectSlug = createSelector(
  selectOrganisationAdminDetailsMembersState,
  state => state.slug
);

export const selectParams = createSelector(
  selectOrganisationAdminDetailsMembersState,
  state => state.params
);