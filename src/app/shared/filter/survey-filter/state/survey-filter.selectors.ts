import { createFeatureSelector, createSelector } from '@ngrx/store';
import { surveyFilterStateKey } from '../constants/survey-filter.constants';
import { createSurveyParams } from '../utils/params.utils';
import { SurveyFilterState } from './survey-filter.reducer';

export const selectSurveyFilterState = createFeatureSelector<SurveyFilterState>(surveyFilterStateKey);

export const selectFiltersActive = createSelector(
  selectSurveyFilterState,
  state => state?.params
    && Object.values(state.params).some((value) => !!value)
);

export const selectRawFilterParams = createSelector(
  selectSurveyFilterState,
  state => state?.params
);

export const selectSurveyFilterParams = createSelector(
  selectRawFilterParams,
  params => createSurveyParams(params)
);