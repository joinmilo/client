import { createFeatureSelector, createSelector } from '@ngrx/store';
import { dealAdminDetailsFavoritesStateKey } from '../constants/deal-admin-details-favorites.constants';
import { DealAdminDetailsFavoritesState } from './deal-admin-details-favorites.reducer';

export const selectDealAdminDetailsFavoritesState = createFeatureSelector<DealAdminDetailsFavoritesState>(dealAdminDetailsFavoritesStateKey);

export const selectDealAdminDetailsFavorites = createSelector(
  selectDealAdminDetailsFavoritesState,
  state => state.comments
);

export const selectPeriod = createSelector(
  selectDealAdminDetailsFavoritesState,
  state => state.period
);

export const selectSlug = createSelector(
  selectDealAdminDetailsFavoritesState,
  state => state.slug
);

export const selectParams = createSelector(
  selectDealAdminDetailsFavoritesState,
  state => state.params
);