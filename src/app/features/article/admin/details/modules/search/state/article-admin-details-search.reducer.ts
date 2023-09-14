import { createReducer, on } from '@ngrx/store';

import { AnalyticsDto, IntervalFilter, Maybe } from 'src/app/core/api/generated/schema';
import { Period } from 'src/app/core/typings/period';
import { ArticleAdminDetailsSearchActions } from './article-admin-details-search.actions';

export interface ArticleAdminDetailsSearchState {
  slug?: Maybe<string>;
  periodParam?: Period,
  intrervalParam?: IntervalFilter,

  searchStatistics?: Maybe<AnalyticsDto[]>;
}

export const initialState: ArticleAdminDetailsSearchState = {
};

export const articleAdminDetailsSearchReducer = createReducer(
  initialState,

  on(ArticleAdminDetailsSearchActions.init, (state, action): ArticleAdminDetailsSearchState => (
    { ...state,
      slug: action.slug,
      periodParam: action.period,
      intrervalParam: action.interval
    }
  )),

  on(ArticleAdminDetailsSearchActions.updatePeriod, (state, action): ArticleAdminDetailsSearchState => (
    { ...state, periodParam: action.period }
  )),

  on(ArticleAdminDetailsSearchActions.updateInterval, (state, action): ArticleAdminDetailsSearchState => (
    { ...state, intrervalParam: action.interval }
  )),

  on(ArticleAdminDetailsSearchActions.setSearchStatistics, (state, action): ArticleAdminDetailsSearchState => (
    { ...state, searchStatistics: action.result }
  )),

);
