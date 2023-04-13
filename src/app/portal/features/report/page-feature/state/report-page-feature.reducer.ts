import { createReducer, on } from '@ngrx/store';
import { Maybe, ReportEntity, ReportTypeEntity } from 'src/schema/schema';
import { ReportPageFeatureActions } from './report-page-feature.actions';

export interface ReportPageFeatureState {
  types?: Maybe<ReportTypeEntity[]>,
  savedReport?: Maybe<ReportEntity>;
}

export const initialState: ReportPageFeatureState = { };

export const reportPageFeatureReducer = createReducer(
  initialState,

  on(ReportPageFeatureActions.reportSaved, (state, action): ReportPageFeatureState => (
    { ...state, savedReport: action.entity }
  )),

  on(ReportPageFeatureActions.setCurrentTypes, (state, action): ReportPageFeatureState => (
    { ...state, types: action.types }
  )),

  on(ReportPageFeatureActions.reset, (state): ReportPageFeatureState => (
    { ...state, savedReport: undefined }
  )),

);
