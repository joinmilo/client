import { createFeatureSelector, createSelector } from '@ngrx/store';
import { eventAdminDetailsFavoritesStateKey } from '../constants/event-admin-details-favorites.constants';
import { EventAdminDetailsFavoritesState } from './event-admin-details-favorites.reducer';

export const selectEventAdminDetailsFavoritesState = createFeatureSelector<EventAdminDetailsFavoritesState>(eventAdminDetailsFavoritesStateKey);

export const selectEventAdminDetailsFavorites = createSelector(
  selectEventAdminDetailsFavoritesState,
  state => state.comments
);

export const selectPeriod = createSelector(
  selectEventAdminDetailsFavoritesState,
  state => state.period
);

export const selectSlug = createSelector(
  selectEventAdminDetailsFavoritesState,
  state => state.slug
);

export const selectParams = createSelector(
  selectEventAdminDetailsFavoritesState,
  state => state.params
);