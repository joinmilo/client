import { createFeatureSelector, createSelector } from '@ngrx/store';
import { articleAdminCategoryStateKey } from '../constants/article-admin-category.constants';
import { ArticleAdminCategoryState } from './article-admin-category.reducer';

export const selectArticleAdminCategoryState = createFeatureSelector<ArticleAdminCategoryState>(articleAdminCategoryStateKey);

export const selectCategoryData = createSelector(
  selectArticleAdminCategoryState,
  state => state.categoryData
);

export const selectParams = createSelector(
  selectArticleAdminCategoryState,
  state => state.params
);