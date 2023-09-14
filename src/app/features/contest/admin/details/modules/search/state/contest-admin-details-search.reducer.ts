import { createReducer, on } from '@ngrx/store';

import { AnalyticsDto, IntervalFilter, Maybe } from 'src/app/core/api/generated/schema';
import { Period } from 'src/app/core/typings/period';
import { ContestAdminDetailsSearchActions } from './contest-admin-details-search.actions';

export interface ContestAdminDetailsSearchState {
  slug?: Maybe<string>;
  periodParam?: Period,
  intrervalParam?: IntervalFilter,

  searchStatistics?: Maybe<AnalyticsDto[]>;
}

export const initialState: ContestAdminDetailsSearchState = {
};

export const contestAdminDetailsSearchReducer = createReducer(
  initialState,

  on(ContestAdminDetailsSearchActions.init, (state, action): ContestAdminDetailsSearchState => (
    { ...state,
      slug: action.slug,
      periodParam: action.period,
      intrervalParam: action.interval
    }
  )),

  on(ContestAdminDetailsSearchActions.updatePeriod, (state, action): ContestAdminDetailsSearchState => (
    { ...state, periodParam: action.period }
  )),

  on(ContestAdminDetailsSearchActions.updateInterval, (state, action): ContestAdminDetailsSearchState => (
    { ...state, intrervalParam: action.interval }
  )),

  on(ContestAdminDetailsSearchActions.setSearchStatistics, (state, action): ContestAdminDetailsSearchState => (
    { ...state, searchStatistics: action.result }
  )),

);
