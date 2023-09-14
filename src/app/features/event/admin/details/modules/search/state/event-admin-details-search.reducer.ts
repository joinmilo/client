import { createReducer, on } from '@ngrx/store';

import { AnalyticsDto, IntervalFilter, Maybe } from 'src/app/core/api/generated/schema';
import { Period } from 'src/app/core/typings/period';
import { EventAdminDetailsSearchActions } from './event-admin-details-search.actions';

export interface EventAdminDetailsSearchState {
  slug?: Maybe<string>;
  periodParam?: Period,
  intervalParam?: IntervalFilter,

  statistics?: Maybe<AnalyticsDto[]>;
}

export const initialState: EventAdminDetailsSearchState = {
};

export const eventAdminDetailsSearchReducer = createReducer(
  initialState,

  on(EventAdminDetailsSearchActions.init, (state, action): EventAdminDetailsSearchState => (
    { ...state,
      slug: action.slug,
      periodParam: action.period,
      intervalParam: action.interval
    }
  )),

  on(EventAdminDetailsSearchActions.updatePeriod, (state, action): EventAdminDetailsSearchState => (
    { ...state, periodParam: action.period }
  )),

  on(EventAdminDetailsSearchActions.updateInterval, (state, action): EventAdminDetailsSearchState => (
    { ...state, intervalParam: action.interval }
  )),

  on(EventAdminDetailsSearchActions.setStatistics, (state, action): EventAdminDetailsSearchState => (
    { ...state, statistics: action.result }
  )),

);
