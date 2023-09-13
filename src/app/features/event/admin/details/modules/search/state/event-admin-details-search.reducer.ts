import { createReducer, on } from '@ngrx/store';

import { AnalyticsDto, IntervalFilter, Maybe } from 'src/app/core/api/generated/schema';
import { Period } from 'src/app/core/typings/period';
import { EventAdminDetailsSearchActions } from './event-admin-details-search.actions';

export interface EventAdminDetailsSearchState {
  slug?: Maybe<string>;
  periodParam?: Period,
  intrervalParam?: IntervalFilter,

  searchStatistics?: Maybe<AnalyticsDto[]>;
}

export const initialState: EventAdminDetailsSearchState = {
};

export const eventAdminDetailsSearchReducer = createReducer(
  initialState,

  on(EventAdminDetailsSearchActions.init, (state, action): EventAdminDetailsSearchState => (
    { ...state,
      slug: action.slug,
      periodParam: action.period,
      intrervalParam: action.interval
    }
  )),

  on(EventAdminDetailsSearchActions.updatePeriod, (state, action): EventAdminDetailsSearchState => (
    { ...state, periodParam: action.period }
  )),

  on(EventAdminDetailsSearchActions.updateInterval, (state, action): EventAdminDetailsSearchState => (
    { ...state, intrervalParam: action.interval }
  )),

  on(EventAdminDetailsSearchActions.setSearchStatistics, (state, action): EventAdminDetailsSearchState => (
    { ...state, searchStatistics: action.result }
  )),

);
