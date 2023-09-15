import { createFeatureSelector, createSelector } from '@ngrx/store';
import { eventAdminDetailsVisitorsStateKey } from '../constants/event-admin-details-visitors.constants';
import { EventAdminDetailsVisitorsState } from './event-admin-details-visitors.reducer';

export const selectEventAdminDetailsVisitorsState = createFeatureSelector<EventAdminDetailsVisitorsState>(eventAdminDetailsVisitorsStateKey);

export const selectSlug = createSelector(
  selectEventAdminDetailsVisitorsState,
  state => state.slug
);

export const selectParams = createSelector(
  selectEventAdminDetailsVisitorsState,
  state => state.params
);

export const selectVisitorsStatistics = createSelector(
  selectEventAdminDetailsVisitorsState,
  state => state.statistics
);