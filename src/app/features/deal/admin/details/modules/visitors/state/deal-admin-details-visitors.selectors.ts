import { createFeatureSelector, createSelector } from '@ngrx/store';
import { dealAdminDetailsVisitorsStateKey } from '../constants/deal-admin-details-visitors.constants';
import { DealAdminDetailsVisitorsState } from './deal-admin-details-visitors.reducer';

export const selectDealAdminDetailsVisitorsState = createFeatureSelector<DealAdminDetailsVisitorsState>(dealAdminDetailsVisitorsStateKey);

export const selectSlug = createSelector(
  selectDealAdminDetailsVisitorsState,
  state => state.slug
);

export const selectParams = createSelector(
  selectDealAdminDetailsVisitorsState,
  state => state.params
);

export const selectVisitorsStatistics = createSelector(
  selectDealAdminDetailsVisitorsState,
  state => state.statistics
);