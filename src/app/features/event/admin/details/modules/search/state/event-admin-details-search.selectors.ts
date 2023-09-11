import { createFeatureSelector, createSelector } from '@ngrx/store';
import { eventAdminDetailsSearchStateKey } from '../constants/event-admin-details-search.constants';
import { EventAdminDetailsSearchState } from './event-admin-details-search.reducer';

export const selectEventAdminDetailsSearchState = createFeatureSelector<EventAdminDetailsSearchState>(eventAdminDetailsSearchStateKey);

export const selectSlug = createSelector(
  selectEventAdminDetailsSearchState,
  state => state.slug
);

export const selectSearchStatistics = createSelector(
  selectEventAdminDetailsSearchState,
  state => state.searchStatistics
);
