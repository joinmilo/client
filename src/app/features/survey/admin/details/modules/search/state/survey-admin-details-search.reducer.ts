import { createReducer, on } from '@ngrx/store';

import { AnalyticsDto, Maybe } from 'src/app/core/api/generated/schema';
import { AnalyticsParams } from 'src/app/shared/widgets/analytics/typings/analytics';
import { SurveyAdminDetailsSearchActions } from './survey-admin-details-search.actions';

export interface SurveyAdminDetailsSearchState {
  slug?: Maybe<string>;
  params?: AnalyticsParams,

  statistics?: Maybe<AnalyticsDto[]>;
}

export const initialState: SurveyAdminDetailsSearchState = {
};

export const surveyAdminDetailsSearchReducer = createReducer(
  initialState,

  on(SurveyAdminDetailsSearchActions.setSlug, (state, action): SurveyAdminDetailsSearchState => (
    { ...state, slug: action.slug }
  )),

  on(SurveyAdminDetailsSearchActions.updateParams, (state, action): SurveyAdminDetailsSearchState => (
    { ...state, params: action.params }
  )),

  on(SurveyAdminDetailsSearchActions.setStatistics, (state, action): SurveyAdminDetailsSearchState => (
    { ...state, statistics: action.result }
  )),

);
