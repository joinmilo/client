import { createFeatureSelector, createSelector } from '@ngrx/store';
import { reportAdminTypesStateKey } from '../constants/report-admin-types.constants';
import { ReportAdminTypesState } from './report-portal-types.reducer';

export const selectReportAdminTypesState = createFeatureSelector<ReportAdminTypesState>(reportAdminTypesStateKey);


export const selectTypesData = createSelector(
  selectReportAdminTypesState,
  state => state.typesData
);

export const selectParams = createSelector(
  selectReportAdminTypesState,
  state => state.params
);