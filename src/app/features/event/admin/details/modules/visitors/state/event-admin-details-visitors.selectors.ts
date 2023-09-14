import { createFeatureSelector, createSelector } from '@ngrx/store';
import { visitorsKey, visitsKey } from 'src/app/core/constants/analytics.constant';
import { eventAdminDetailsVisitorsStateKey } from '../constants/event-admin-details-visitors.constants';
import { EventAdminDetailsVisitorsState } from './event-admin-details-visitors.reducer';

export const selectEventAdminDetailsVisitorsState = createFeatureSelector<EventAdminDetailsVisitorsState>(eventAdminDetailsVisitorsStateKey);

export const selectSlug = createSelector(
  selectEventAdminDetailsVisitorsState,
  state => state.slug
);

export const selectPeriodParam = createSelector(
  selectEventAdminDetailsVisitorsState,
  state => state.periodParam
);

export const selectIntervalParam = createSelector(
  selectEventAdminDetailsVisitorsState,
  state => state.intervalParam
);

export const selectSearchStatistics = createSelector(
  selectEventAdminDetailsVisitorsState,
  state => state.statistics
);

export const selectVisitsStatistics = createSelector(
  selectSearchStatistics,
  statistics => statistics
    ?.filter(statistic => statistic.name === visitsKey)
    ?.[0]
);

export const selectVisitorsStatistics = createSelector(
  selectSearchStatistics,
  statistics => statistics
    ?.filter(statistic => statistic.name === visitorsKey)
    ?.[0]
);