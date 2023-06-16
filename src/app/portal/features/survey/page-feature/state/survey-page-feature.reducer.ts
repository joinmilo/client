import { createReducer, on } from '@ngrx/store';
import { Maybe, SurveyEntity } from 'src/schema/schema';
import { SurveyPageFeatureActions } from './survey-page-feature.actions';

export interface SurveyPageFeatureState {
  recentSurveys?: Maybe<SurveyEntity[]>,
}

export const initialState: SurveyPageFeatureState = { };

export const surveyPageFeatureReducer = createReducer(
  initialState,

  on(SurveyPageFeatureActions.setRecentSurveys, (state, action): SurveyPageFeatureState => (
    { ...state, recentSurveys: action.surveys }
  )),
);
