import { createFeatureSelector, createSelector } from '@ngrx/store';
import { articleAdminDetailsRatingStateKey } from '../constants/article-admin-details-rating.constants';
import { ArticleAdminDetailsRatingState } from './article-admin-details-rating.reducer';

export const selectArticleAdminDetailsRatingState = createFeatureSelector<ArticleAdminDetailsRatingState>(articleAdminDetailsRatingStateKey);

export const selectSlug = createSelector(
  selectArticleAdminDetailsRatingState,
  state => state.slug
);

export const selectParams = createSelector(
  selectArticleAdminDetailsRatingState,
  state => state.params
);

export const selectRatingStatistics = createSelector(
  selectArticleAdminDetailsRatingState,
  state => state.statistics
);