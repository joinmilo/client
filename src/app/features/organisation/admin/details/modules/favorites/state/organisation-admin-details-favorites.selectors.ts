import { createFeatureSelector, createSelector } from '@ngrx/store';
import { organisationAdminDetailsFavoritesStateKey } from '../constants/organisation-admin-details-favorites.constants';
import { OrganisationAdminDetailsFavoritesState } from './organisation-admin-details-favorites.reducer';

export const selectOrganisationAdminDetailsFavoritesState = createFeatureSelector<OrganisationAdminDetailsFavoritesState>(organisationAdminDetailsFavoritesStateKey);

export const selectOrganisationAdminDetailsFavorites = createSelector(
  selectOrganisationAdminDetailsFavoritesState,
  state => state.comments
);

export const selectSlug = createSelector(
  selectOrganisationAdminDetailsFavoritesState,
  state => state.slug
);

export const selectParams = createSelector(
  selectOrganisationAdminDetailsFavoritesState,
  state => state.params
);