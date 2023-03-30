import { createFeatureSelector, createSelector } from '@ngrx/store';
import { selectCoreState } from 'src/app/core/state/core.selectors';
import { reportFeatureKey } from '../constants/report.constant';
import { ReportState } from './report.reducer';

export const selectReportState = createFeatureSelector<ReportState>(reportFeatureKey);

export const selectReportTypes = createSelector(
  selectReportState,
  state => state.types
);

export const selectSavedReport = createSelector(
  selectReportState,
  state => state.savedReport
);

export const selectConfiguration = createSelector(
  selectCoreState,
  state => {

    return state?.configurations?.find(c => c?.key === 'sitekey')
  }
);