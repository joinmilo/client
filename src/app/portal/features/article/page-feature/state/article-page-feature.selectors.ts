import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CardInput } from 'src/app/core/typings/card';
import { articlePageFeatureStateKey } from '../constants/article-page-feature.constant';
import { ArticlePageFeatureState } from './article-page-feature.reducer';

export const selectArticlePageFeatureState = createFeatureSelector<ArticlePageFeatureState>(articlePageFeatureStateKey);

export const selectRecentArticles = createSelector(
  selectArticlePageFeatureState,
  state => state.recentArticles
);

export const selectRecentArticleCards = createSelector(
  selectRecentArticles,
  recentArticles => recentArticles?.map(article => ({
    categoryTranslatables: article.category?.translatables,
    categoryTranslatableField: 'name',
    creator: article.publicAuthor ?? article.author?.user?.firstName,
    creatorImage: article.author?.titleImage,
    date: article.modified,
    image: article.cardImage,
    textTranslatableField: 'shortDescription',
    titleTranslatableField: 'title',
    translatables: article.translatables,
  })) as CardInput[]
);