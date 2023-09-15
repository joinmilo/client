import { createFeatureSelector, createSelector } from '@ngrx/store';
import { articleAdminDetailsSearchStateKey } from '../constants/article-admin-details-search.constants';
import { ArticleAdminDetailsSearchState } from './article-admin-details-search.reducer';

export const selectArticleAdminDetailsSearchState = createFeatureSelector<ArticleAdminDetailsSearchState>(articleAdminDetailsSearchStateKey);

export const selectSlug = createSelector(
  selectArticleAdminDetailsSearchState,
  state => state.slug
);

export const selectParams = createSelector(
  selectArticleAdminDetailsSearchState,
  state => state.params
);

export const selectSearchStatistics = createSelector(
  selectArticleAdminDetailsSearchState,
  state => state.statistics
);