import { createReducer, on } from '@ngrx/store';

import { AnalyticsDto, Maybe } from 'src/app/core/api/generated/schema';
import { AnalyticsParams } from 'src/app/shared/widgets/analytics/typings/analytics';
import { EventAdminDetailsSearchActions } from './event-admin-details-search.actions';

export interface EventAdminDetailsSearchState {
  slug?: Maybe<string>;
  params?: AnalyticsParams,

  statistics?: Maybe<AnalyticsDto[]>;
}

export const initialState: EventAdminDetailsSearchState = {
};

export const eventAdminDetailsSearchReducer = createReducer(
  initialState,

  on(EventAdminDetailsSearchActions.setSlug, (state, action): EventAdminDetailsSearchState => (
    { ...state, slug: action.slug }
  )),

  on(EventAdminDetailsSearchActions.updateParams, (state, action): EventAdminDetailsSearchState => (
    { ...state, params: action.params }
  )),

  on(EventAdminDetailsSearchActions.setStatistics, (state, action): EventAdminDetailsSearchState => (
    { ...state, statistics: action.result }
  )),

);
