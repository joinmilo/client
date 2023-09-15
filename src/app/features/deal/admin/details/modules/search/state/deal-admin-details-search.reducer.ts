import { createReducer, on } from '@ngrx/store';

import { AnalyticsDto, Maybe } from 'src/app/core/api/generated/schema';
import { AnalyticsParams } from 'src/app/shared/widgets/analytics/typings/analytics';
import { DealAdminDetailsSearchActions } from './deal-admin-details-search.actions';

export interface DealAdminDetailsSearchState {
  slug?: Maybe<string>;
  params?: AnalyticsParams,

  statistics?: Maybe<AnalyticsDto[]>;
}

export const initialState: DealAdminDetailsSearchState = {
};

export const dealAdminDetailsSearchReducer = createReducer(
  initialState,

  on(DealAdminDetailsSearchActions.setSlug, (state, action): DealAdminDetailsSearchState => (
    { ...state, slug: action.slug }
  )),

  on(DealAdminDetailsSearchActions.updateParams, (state, action): DealAdminDetailsSearchState => (
    { ...state, params: action.params }
  )),

  on(DealAdminDetailsSearchActions.setStatistics, (state, action): DealAdminDetailsSearchState => (
    { ...state, statistics: action.result }
  )),

);
