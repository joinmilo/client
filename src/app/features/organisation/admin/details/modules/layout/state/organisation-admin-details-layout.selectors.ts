import { createFeatureSelector, createSelector } from '@ngrx/store';
import { organisationAdminDetailsLayoutStateKey } from '../constants/organisation-admin-details-layout.constants';
import { OrganisationAdminDetailsLayoutState } from './organisation-admin-details-layout.reducer';

export const selectOrganisationAdminDetailsLayoutState = createFeatureSelector<OrganisationAdminDetailsLayoutState>(organisationAdminDetailsLayoutStateKey);

export const selectOrganisationAdminDetailsLayout = createSelector(
  selectOrganisationAdminDetailsLayoutState,
  state => state.details
);
