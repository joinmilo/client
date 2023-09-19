import { createFeatureSelector, createSelector } from '@ngrx/store';
import { reportAdminOverviewStateKey } from '../constants/report-admin-overview.constants';
import { ReportAdminOverviewState } from './report-portal-overview.reducer';

export const selectReportAdminOverviewState = createFeatureSelector<ReportAdminOverviewState>(reportAdminOverviewStateKey);
export const selectOverviewData = createSelector(
  selectReportAdminOverviewState,
  state => state.overviewData
);

export const selectParams = createSelector(
  selectReportAdminOverviewState,
  state => state.params
);