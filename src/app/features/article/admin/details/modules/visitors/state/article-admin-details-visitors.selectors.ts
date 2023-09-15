import { createFeatureSelector, createSelector } from '@ngrx/store';
import { articleAdminDetailsVisitorsStateKey } from '../constants/article-admin-details-visitors.constants';
import { ArticleAdminDetailsVisitorsState } from './article-admin-details-visitors.reducer';

export const selectArticleAdminDetailsVisitorsState = createFeatureSelector<ArticleAdminDetailsVisitorsState>(articleAdminDetailsVisitorsStateKey);

export const selectSlug = createSelector(
  selectArticleAdminDetailsVisitorsState,
  state => state.slug
);

export const selectParams = createSelector(
  selectArticleAdminDetailsVisitorsState,
  state => state.params
);

export const selectVisitorsStatistics = createSelector(
  selectArticleAdminDetailsVisitorsState,
  state => state.statistics
);