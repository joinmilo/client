import { createFeatureSelector, createSelector } from '@ngrx/store';
import { articlesToCards } from 'src/app/shared/card/utils/card.utils';
import { articlePageFeatureStateKey } from '../constants/article-page-feature.constant';
import { ArticlePageFeatureState } from './article-page-feature.reducer';

export const selectArticlePageFeatureState = createFeatureSelector<ArticlePageFeatureState>(articlePageFeatureStateKey);

export const selectRecentArticles = createSelector(
  selectArticlePageFeatureState,
  state => state.recentArticles
);

export const selectRecentArticleCards = createSelector(
  selectRecentArticles,
  recentArticles => articlesToCards(recentArticles)
);