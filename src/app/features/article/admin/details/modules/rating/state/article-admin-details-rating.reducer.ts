import { createReducer, on } from '@ngrx/store';

import { AnalyticsDto, Maybe } from 'src/app/core/api/generated/schema';
import { AnalyticsParams } from 'src/app/shared/widgets/analytics/typings/analytics';
import { ArticleAdminDetailsRatingActions } from './article-admin-details-rating.actions';

export interface ArticleAdminDetailsRatingState {
  slug?: Maybe<string>;
  params?: AnalyticsParams,

  statistics?: Maybe<AnalyticsDto[]>;
}

export const initialState: ArticleAdminDetailsRatingState = {
};

export const articleAdminDetailsRatingReducer = createReducer(
  initialState,

  on(ArticleAdminDetailsRatingActions.setSlug, (state, action): ArticleAdminDetailsRatingState => (
    { ...state, slug: action.slug }
  )),

  on(ArticleAdminDetailsRatingActions.updateParams, (state, action): ArticleAdminDetailsRatingState => (
    { ...state, params: action.params }
  )),

  on(ArticleAdminDetailsRatingActions.setStatistics, (state, action): ArticleAdminDetailsRatingState => (
    { ...state, statistics: action.result }
  )),
);



