import { createFeatureSelector, createSelector } from '@ngrx/store';
import { articleAdminCategoryFormStateKey } from '../constants/article-admin-category-form.constants';
import { ArticleAdminFormState } from './article-admin-category-form.reducer';

export const selectArticleAdminFormState = createFeatureSelector<ArticleAdminFormState>(articleAdminCategoryFormStateKey);

export const selectEditableArticleCategories = createSelector(
  selectArticleAdminFormState,
  state => state.editArticleCategory
);