import { createReducer, on } from '@ngrx/store';
import { Maybe, ReportEntity } from 'src/schema/schema';
import { ReportTypeEntity } from './../../../../../schema/schema';
import { ReportActions } from './report.actions';

export interface ReportState {
  types?: Maybe<ReportTypeEntity[]>,
  savedReport?: Maybe<ReportEntity>;
}

export const initialState: ReportState = {};

export const reportReducer = createReducer(
  initialState,

  on(ReportActions.reportSaved, (state, action): ReportState => (
    { ...state, savedReport: action.entity }
  )),

  on(ReportActions.setCurrentTypes, (state, action): ReportState => (
    { ...state, types: action.types }
  )),
);
