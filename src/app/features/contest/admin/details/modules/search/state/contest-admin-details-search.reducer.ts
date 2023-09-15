import { createReducer, on } from '@ngrx/store';

import { AnalyticsDto, Maybe } from 'src/app/core/api/generated/schema';
import { AnalyticsParams } from 'src/app/shared/widgets/analytics/typings/analytics';
import { ContestAdminDetailsSearchActions } from './contest-admin-details-search.actions';

export interface ContestAdminDetailsSearchState {
  slug?: Maybe<string>;
  params?: AnalyticsParams,

  statistics?: Maybe<AnalyticsDto[]>;
}

export const initialState: ContestAdminDetailsSearchState = {
};

export const contestAdminDetailsSearchReducer = createReducer(
  initialState,

  on(ContestAdminDetailsSearchActions.setSlug, (state, action): ContestAdminDetailsSearchState => (
    { ...state, slug: action.slug }
  )),

  on(ContestAdminDetailsSearchActions.updateParams, (state, action): ContestAdminDetailsSearchState => (
    { ...state, params: action.params }
  )),

  on(ContestAdminDetailsSearchActions.setStatistics, (state, action): ContestAdminDetailsSearchState => (
    { ...state, statistics: action.result }
  )),

);
