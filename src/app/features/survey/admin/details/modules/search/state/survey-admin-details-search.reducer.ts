import { createReducer, on } from '@ngrx/store';

import { AnalyticsDto, IntervalFilter, Maybe } from 'src/app/core/api/generated/schema';
import { Period } from 'src/app/core/typings/period';
import { SurveyAdminDetailsSearchActions } from './survey-admin-details-search.actions';

export interface SurveyAdminDetailsSearchState {
  slug?: Maybe<string>;
  periodParam?: Period,
  intrervalParam?: IntervalFilter,

  searchStatistics?: Maybe<AnalyticsDto[]>;
}

export const initialState: SurveyAdminDetailsSearchState = {
};

export const surveyAdminDetailsSearchReducer = createReducer(
  initialState,

  on(SurveyAdminDetailsSearchActions.init, (state, action): SurveyAdminDetailsSearchState => (
    { ...state,
      slug: action.slug,
      periodParam: action.period,
      intrervalParam: action.interval
    }
  )),

  on(SurveyAdminDetailsSearchActions.updatePeriod, (state, action): SurveyAdminDetailsSearchState => (
    { ...state, periodParam: action.period }
  )),

  on(SurveyAdminDetailsSearchActions.updateInterval, (state, action): SurveyAdminDetailsSearchState => (
    { ...state, intrervalParam: action.interval }
  )),

  on(SurveyAdminDetailsSearchActions.setSearchStatistics, (state, action): SurveyAdminDetailsSearchState => (
    { ...state, searchStatistics: action.result }
  )),

);
