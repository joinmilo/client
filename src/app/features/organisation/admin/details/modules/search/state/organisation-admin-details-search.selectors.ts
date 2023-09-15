import { createFeatureSelector, createSelector } from '@ngrx/store';
import { organisationAdminDetailsSearchStateKey } from '../constants/organisation-admin-details-search.constants';
import { OrganisationAdminDetailsSearchState } from './organisation-admin-details-search.reducer';

export const selectOrganisationAdminDetailsSearchState = createFeatureSelector<OrganisationAdminDetailsSearchState>(organisationAdminDetailsSearchStateKey);

export const selectSlug = createSelector(
  selectOrganisationAdminDetailsSearchState,
  state => state.slug
);

export const selectParams = createSelector(
  selectOrganisationAdminDetailsSearchState,
  state => state.params
);

export const selectSearchStatistics = createSelector(
  selectOrganisationAdminDetailsSearchState,
  state => state.statistics
);