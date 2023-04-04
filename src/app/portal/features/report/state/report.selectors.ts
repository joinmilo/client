import { createFeatureSelector, createSelector } from '@ngrx/store';
import { reportStateKey } from '../constants/report.constant';
import { ReportState } from './report.reducer';

export const selectReportState = createFeatureSelector<ReportState>(reportStateKey);

export const selectReportTypes = createSelector(
  selectReportState,
  state => state.types
);

export const selectSavedReport = createSelector(
  selectReportState,
  state => state.savedReport
);