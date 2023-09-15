import { createReducer, on } from '@ngrx/store';

import { AnalyticsDto, Maybe } from 'src/app/core/api/generated/schema';
import { AnalyticsParams } from 'src/app/shared/widgets/analytics/typings/analytics';
import { ArticleAdminDetailsSearchActions } from './article-admin-details-search.actions';

export interface ArticleAdminDetailsSearchState {
  slug?: Maybe<string>;
  params?: AnalyticsParams,

  statistics?: Maybe<AnalyticsDto[]>;
}

export const initialState: ArticleAdminDetailsSearchState = {
};

export const articleAdminDetailsSearchReducer = createReducer(
  initialState,

  on(ArticleAdminDetailsSearchActions.setSlug, (state, action): ArticleAdminDetailsSearchState => (
    { ...state, slug: action.slug }
  )),

  on(ArticleAdminDetailsSearchActions.updateParams, (state, action): ArticleAdminDetailsSearchState => (
    { ...state, params: action.params }
  )),

  on(ArticleAdminDetailsSearchActions.setStatistics, (state, action): ArticleAdminDetailsSearchState => (
    { ...state, statistics: action.result }
  )),

);
