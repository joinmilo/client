import { createReducer, on } from '@ngrx/store';
import { SurveyFilterQueryDefinition, SurveyFilterQueryParams } from 'src/app/core/typings/filter-params/survey-filter-param';
import { SurveyFilterActions } from './survey-filter.actions';

export interface SurveyFilterState {
  params: SurveyFilterQueryParams,
}

export const initialState: SurveyFilterState = {
  params: {}
};

export const surveyFilterReducer = createReducer(
  initialState,

  on(SurveyFilterActions.allUpdated, (state, action): SurveyFilterState => (
    { ...state, params: action.params }
  )),

  on(SurveyFilterActions.clearAll, (state): SurveyFilterState => (
    { ...state, params: {} }
  )),

  on(SurveyFilterActions.selectedPast, (state, action): SurveyFilterState => (
    {
      ...state,
      params: {
        ...state.params,
        [SurveyFilterQueryDefinition.past]: action.value
      }
    }
  )),
);
