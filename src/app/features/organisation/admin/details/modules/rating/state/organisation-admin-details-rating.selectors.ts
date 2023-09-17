import { createFeatureSelector, createSelector } from '@ngrx/store';
import { organisationAdminDetailsRatingStateKey } from '../constants/organisation-admin-details-rating.constants';
import { OrganisationAdminDetailsRatingState } from './organisation-admin-details-rating.reducer';

export const selectOrganisationAdminDetailsRatingState = createFeatureSelector<OrganisationAdminDetailsRatingState>(organisationAdminDetailsRatingStateKey);

export const selectSlug = createSelector(
  selectOrganisationAdminDetailsRatingState,
  state => state.slug
);

export const selectParams = createSelector(
  selectOrganisationAdminDetailsRatingState,
  state => state.params
);

export const selectRatingStatistics = createSelector(
  selectOrganisationAdminDetailsRatingState,
  state => state.statistics
);