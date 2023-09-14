import { createFeatureSelector, createSelector } from '@ngrx/store';
import { organisationAdminDetailsLandingStateKey } from '../constants/organisation-admin-details-landing.constants';
import { OrganisationAdminDetailsLandingState } from './organisation-admin-details-landing.reducer';

export const selectOrganisationAdminDetailsLandingState = createFeatureSelector<OrganisationAdminDetailsLandingState>(organisationAdminDetailsLandingStateKey);

export const selectOrganisationAdminDetailsLanding = createSelector(
  selectOrganisationAdminDetailsLandingState,
  state => state.details
);

export const selectOrganisationAdminDetailsLandingMedia = createSelector(
  selectOrganisationAdminDetailsLandingState,
  state => state.details?.uploads?.map(upload => upload?.media ?? {})
);
