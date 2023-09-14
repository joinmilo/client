import { createReducer, on } from '@ngrx/store';

import { AnalyticsDto, IntervalFilter, Maybe } from 'src/app/core/api/generated/schema';
import { Period } from 'src/app/core/typings/period';
import { EventAdminDetailsVisitorsActions } from './event-admin-details-visitors.actions';

export interface EventAdminDetailsVisitorsState {
  slug?: Maybe<string>;
  periodParam?: Period,
  intervalParam?: IntervalFilter,

  statistics?: Maybe<AnalyticsDto[]>;
}

export const initialState: EventAdminDetailsVisitorsState = {
};

export const eventAdminDetailsVisitorsReducer = createReducer(
  initialState,

  on(EventAdminDetailsVisitorsActions.init, (state, action): EventAdminDetailsVisitorsState => (
    {
      ...state,
      slug: action.slug,
      periodParam: action.period,
      intervalParam: action.interval
    }
  )),

  on(EventAdminDetailsVisitorsActions.updatePeriod, (state, action): EventAdminDetailsVisitorsState => (
    { ...state, periodParam: action.period }
  )),

  on(EventAdminDetailsVisitorsActions.updateInterval, (state, action): EventAdminDetailsVisitorsState => (
    { ...state, intervalParam: action.interval }
  )),

  on(EventAdminDetailsVisitorsActions.setStatistics, (state, action): EventAdminDetailsVisitorsState => (
    { ...state, statistics: action.result }
  )),
);



