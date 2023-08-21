import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ContestAdminOverviewState } from './contest-portal-overview.reducer';
import { contestAdminOverviewStateKey } from '../constants/contest-admin-overview.constants';

export const selectContestAdminOverviewState = createFeatureSelector<ContestAdminOverviewState>(contestAdminOverviewStateKey);

export const selectOverviewData = createSelector(
  selectContestAdminOverviewState,
  state => state.overviewData
);

export const selectParams = createSelector(
  selectContestAdminOverviewState,
  state => state.params
);
