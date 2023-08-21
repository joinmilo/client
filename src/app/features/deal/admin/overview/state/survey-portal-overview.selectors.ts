import { createFeatureSelector, createSelector } from '@ngrx/store';
import { dealAdminOverviewStateKey } from '../constants/deal-admin-overview.constants';
import { DealAdminOverviewState } from './survey-portal-overview.reducer';

export const selectDealAdminOverviewState = createFeatureSelector<DealAdminOverviewState>(dealAdminOverviewStateKey);

export const selectOverviewData = createSelector(
  selectDealAdminOverviewState,
  state => state.overviewData
);

export const selectParams = createSelector(
  selectDealAdminOverviewState,
  state => state.params
);
