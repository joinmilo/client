import { createFeatureSelector, createSelector } from '@ngrx/store';
import { articleAdminOverviewStateKey } from '../constants/article-admin-overview.constants';
import { ArticleAdminOverviewState } from './article-admin-overview.reducer';

export const selectArticleAdminOverviewState = createFeatureSelector<ArticleAdminOverviewState>(articleAdminOverviewStateKey);

export const selectSponsoredArticle = createSelector(
  selectArticleAdminOverviewState,
  state => state.sponsoredArticle
);

export const selectOverviewData = createSelector(
  selectArticleAdminOverviewState,
  state => state.overviewData
);

export const selectParams = createSelector(
  selectArticleAdminOverviewState,
  state => state.params
);