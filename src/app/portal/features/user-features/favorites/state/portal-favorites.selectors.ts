import { createFeatureSelector, createSelector } from '@ngrx/store';
import { portalFavoritesStateKey } from '../constants/portal-favorites.constants';
import { PortalFavoritesState } from './portal-favorites.reducer';

export const selectPortalFavoritesState = createFeatureSelector<PortalFavoritesState>(portalFavoritesStateKey);

export const selectFavoriteArticles = createSelector(
  selectPortalFavoritesState,
  state => state.favoriteArticles
);

export const selectFavoriteAuthors = createSelector(
  selectPortalFavoritesState,
  state => state.favoriteAuthors
);

export const selectFavoriteDeals = createSelector(
  selectPortalFavoritesState,
  state => state.favoriteDeals
);

export const selectFavoriteEvents = createSelector(
  selectPortalFavoritesState,
  state => state.favoriteEvents
);

export const selectFavoriteOrganisations = createSelector(
  selectPortalFavoritesState,
  state => state.favoriteOrganisations
);
