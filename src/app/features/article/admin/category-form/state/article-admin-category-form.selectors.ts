import { createFeatureSelector, createSelector } from '@ngrx/store';
import { articleAdminCategoryFormStateKey } from '../constants/article-admin-category-form.constants';
import { ArticleCategoryAdminFormState } from './article-admin-category-form.reducer';


export const selectArticleAdminFormState = createFeatureSelector<ArticleCategoryAdminFormState>(articleAdminCategoryFormStateKey);

export const selectEditableArticleCategory = createSelector(
  selectArticleAdminFormState,
  state => state.editArticleCategory
);