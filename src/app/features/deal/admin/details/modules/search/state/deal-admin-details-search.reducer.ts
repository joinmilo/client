import { createReducer, on } from '@ngrx/store';

import { AnalyticsDto, IntervalFilter, Maybe } from 'src/app/core/api/generated/schema';
import { Period } from 'src/app/core/typings/period';
import { DealAdminDetailsSearchActions } from './deal-admin-details-search.actions';

export interface DealAdminDetailsSearchState {
  slug?: Maybe<string>;
  periodParam?: Period,
  intrervalParam?: IntervalFilter,

  searchStatistics?: Maybe<AnalyticsDto[]>;
}

export const initialState: DealAdminDetailsSearchState = {
};

export const dealAdminDetailsSearchReducer = createReducer(
  initialState,

  on(DealAdminDetailsSearchActions.init, (state, action): DealAdminDetailsSearchState => (
    { ...state,
      slug: action.slug,
      periodParam: action.period,
      intrervalParam: action.interval
    }
  )),

  on(DealAdminDetailsSearchActions.updatePeriod, (state, action): DealAdminDetailsSearchState => (
    { ...state, periodParam: action.period }
  )),

  on(DealAdminDetailsSearchActions.updateInterval, (state, action): DealAdminDetailsSearchState => (
    { ...state, intrervalParam: action.interval }
  )),

  on(DealAdminDetailsSearchActions.setSearchStatistics, (state, action): DealAdminDetailsSearchState => (
    { ...state, searchStatistics: action.result }
  )),

);
