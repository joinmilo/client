import { createReducer, on } from '@ngrx/store';

import { AnalyticsDto, Maybe } from 'src/app/core/api/generated/schema';
import { AnalyticsParams } from 'src/app/shared/widgets/analytics/typings/analytics';
import { SurveyAdminDetailsVisitorsActions } from './survey-admin-details-visitors.actions';

export interface SurveyAdminDetailsVisitorsState {
  slug?: Maybe<string>;
  params?: AnalyticsParams,

  statistics?: Maybe<AnalyticsDto[]>;
}

export const initialState: SurveyAdminDetailsVisitorsState = {
};

export const surveyAdminDetailsVisitorsReducer = createReducer(
  initialState,

  on(SurveyAdminDetailsVisitorsActions.setSlug, (state, action): SurveyAdminDetailsVisitorsState => (
    { ...state, slug: action.slug }
  )),

  on(SurveyAdminDetailsVisitorsActions.updateParams, (state, action): SurveyAdminDetailsVisitorsState => (
    { ...state, params: action.params }
  )),

  on(SurveyAdminDetailsVisitorsActions.setStatistics, (state, action): SurveyAdminDetailsVisitorsState => (
    { ...state, statistics: action.result }
  )),
);



