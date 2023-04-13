import { createFeatureSelector, createSelector } from '@ngrx/store';
import { reportPageFeatureStateKey } from '../constants/report-page-feature.constant';
import { ReportPageFeatureState } from './report-page-feature.reducer';

export const selectReportPageFeatureState = createFeatureSelector<ReportPageFeatureState>(reportPageFeatureStateKey);

export const selectReportTypes = createSelector(
  selectReportPageFeatureState,
  state => state.types
);

export const selectSavedReport = createSelector(
  selectReportPageFeatureState,
  state => state.savedReport
);