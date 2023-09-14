import { createFeatureSelector, createSelector } from '@ngrx/store';
import { articleAdminDetailsCommentsStateKey } from '../constants/article-admin-details-comments.constants';
import { ArticleAdminDetailsCommentsState } from './article-admin-details-comments.reducer';

export const selectArticleAdminDetailsCommentsState = createFeatureSelector<ArticleAdminDetailsCommentsState>(articleAdminDetailsCommentsStateKey);

export const selectArticleAdminDetailsComments = createSelector(
  selectArticleAdminDetailsCommentsState,
  state => state.comments
);

export const selectPeriod = createSelector(
  selectArticleAdminDetailsCommentsState,
  state => state.period
);

export const selectSlug = createSelector(
  selectArticleAdminDetailsCommentsState,
  state => state.slug
);

export const selectParams = createSelector(
  selectArticleAdminDetailsCommentsState,
  state => state.params
);