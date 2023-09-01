import { createFeatureSelector, createSelector } from '@ngrx/store';
import { eventAdminDetailsVisitorsStateKey } from '../constants/event-admin-details-visitors.constants';
import { EventAdminDetailsVisitorsState } from './event-admin-details-visitors.reducer';

export const selectEventAdminDetailsVisitorsState = createFeatureSelector<EventAdminDetailsVisitorsState>(eventAdminDetailsVisitorsStateKey);

export const selectEventAdminDetailsVisitors = createSelector(
  selectEventAdminDetailsVisitorsState,
  state => state.details
);
