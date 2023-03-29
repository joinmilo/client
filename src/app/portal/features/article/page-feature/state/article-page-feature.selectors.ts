import { createFeatureSelector, createSelector } from '@ngrx/store';
import { transformArticlesToCards } from 'src/app/portal/common/components/common.utils/card-input.utils';
import { articlePageFeatureStateKey } from '../constants/article-page-feature.constant';
import { ArticlePageFeatureState } from './article-page-feature.reducer';

export const selectArticlePageFeatureState = createFeatureSelector<ArticlePageFeatureState>(articlePageFeatureStateKey);

export const selectRecentArticles = createSelector(
  selectArticlePageFeatureState,
  state => state.recentArticles
);

export const selectRecentArticleCards = createSelector(
  selectRecentArticles,
  recentArticles => transformArticlesToCards(recentArticles)
);