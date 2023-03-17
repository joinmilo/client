import { createFeatureSelector, createSelector } from '@ngrx/store';
import { reportFeatureKey } from '../constants/report.constant';
import { ReportState } from './report.reducer';

export const selectReportState = createFeatureSelector<ReportState>(reportFeatureKey);

export const selectReportTypes = createSelector(
  selectReportState,
  state => state.types);