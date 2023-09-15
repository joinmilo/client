import { createReducer, on } from '@ngrx/store';

import { AnalyticsDto, Maybe } from 'src/app/core/api/generated/schema';
import { AnalyticsParams } from 'src/app/shared/widgets/analytics/typings/analytics';
import { ArticleAdminDetailsVisitorsActions } from './article-admin-details-visitors.actions';

export interface ArticleAdminDetailsVisitorsState {
  slug?: Maybe<string>;
  params?: AnalyticsParams,

  statistics?: Maybe<AnalyticsDto[]>;
}

export const initialState: ArticleAdminDetailsVisitorsState = {
};

export const articleAdminDetailsVisitorsReducer = createReducer(
  initialState,

  on(ArticleAdminDetailsVisitorsActions.setSlug, (state, action): ArticleAdminDetailsVisitorsState => (
    { ...state, slug: action.slug }
  )),

  on(ArticleAdminDetailsVisitorsActions.updateParams, (state, action): ArticleAdminDetailsVisitorsState => (
    { ...state, params: action.params }
  )),

  on(ArticleAdminDetailsVisitorsActions.setStatistics, (state, action): ArticleAdminDetailsVisitorsState => (
    { ...state, statistics: action.result }
  )),
);



