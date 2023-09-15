import { createReducer, on } from '@ngrx/store';

import { AnalyticsDto, Maybe } from 'src/app/core/api/generated/schema';
import { AnalyticsParams } from 'src/app/shared/widgets/analytics/typings/analytics';
import { DealAdminDetailsVisitorsActions } from './deal-admin-details-visitors.actions';

export interface DealAdminDetailsVisitorsState {
  slug?: Maybe<string>;
  params?: AnalyticsParams,

  statistics?: Maybe<AnalyticsDto[]>;
}

export const initialState: DealAdminDetailsVisitorsState = {
};

export const dealAdminDetailsVisitorsReducer = createReducer(
  initialState,

  on(DealAdminDetailsVisitorsActions.setSlug, (state, action): DealAdminDetailsVisitorsState => (
    { ...state, slug: action.slug }
  )),

  on(DealAdminDetailsVisitorsActions.updateParams, (state, action): DealAdminDetailsVisitorsState => (
    { ...state, params: action.params }
  )),

  on(DealAdminDetailsVisitorsActions.setStatistics, (state, action): DealAdminDetailsVisitorsState => (
    { ...state, statistics: action.result }
  )),
);



