import { createReducer, on } from '@ngrx/store';

import { AnalyticsDto, Maybe } from 'src/app/core/api/generated/schema';
import { EventAdminDetailsSearchActions } from './event-admin-details-search.actions';

export interface EventAdminDetailsSearchState {
  slug?: Maybe<string>;
  searchStatistics?: Maybe<AnalyticsDto[]>;
}

export const initialState: EventAdminDetailsSearchState = {
};

export const eventAdminDetailsSearchReducer = createReducer(
  initialState,

  on(EventAdminDetailsSearchActions.setSlug, (state, action): EventAdminDetailsSearchState => (
    { ...state, slug: action.slug }
  )),

  on(EventAdminDetailsSearchActions.setSearchStatistics, (state, action): EventAdminDetailsSearchState => (
    { ...state, searchStatistics: action.result }
  )),

);
