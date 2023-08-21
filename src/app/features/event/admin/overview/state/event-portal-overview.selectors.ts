import { createFeatureSelector, createSelector } from '@ngrx/store';
import { eventAdminOverviewStateKey } from '../constants/event-admin-overview.constants';
import { EventAdminOverviewState } from './event-portal-overview.reducer';

export const selectEventAdminOverviewState = createFeatureSelector<EventAdminOverviewState>(eventAdminOverviewStateKey);

export const selectOverviewData = createSelector(
  selectEventAdminOverviewState,
  state => state.overviewData
);

export const selectParams = createSelector(
  selectEventAdminOverviewState,
  state => state.params
);
