import { createReducer, on } from '@ngrx/store';
import { Maybe, ReportEntity } from 'src/schema/schema';
import { ReportTypeEntity } from './../../../../../schema/schema';
import { ReportActions, ReportTypeActions } from './report.actions';

export interface ReportState {
  types?: Maybe<ReportTypeEntity[]>,
  report?: ReportEntity | null;
}

export const initialState: ReportState = {};

export const reportReducer = createReducer(
  initialState,

  on(ReportActions.saveReport, (state, action): ReportState => (
    { ...state, report: action.entity }
  )),

  on(ReportTypeActions.setCurrentTypes, (state, action): ReportState => (
    { ...state, types: action.types }
  )),
);
