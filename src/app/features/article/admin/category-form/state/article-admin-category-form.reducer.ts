import { createReducer, on } from '@ngrx/store';
import { ArticleCategoryEntity, Maybe } from 'src/app/core/api/generated/schema';
import { ArticleAdminCategoryFormActions } from './article-admin-category-form.actions';

export interface ArticleCategoryAdminFormState {
  editArticleCategory?: Maybe<ArticleCategoryEntity>;
}

export const initialState: ArticleCategoryAdminFormState = {
};

export const articleAdminFormReducer = createReducer(
  initialState,

  on(ArticleAdminCategoryFormActions.categoryRetrieved, (state, action): ArticleCategoryAdminFormState => (
    { ...state, editArticleCategory: action.entity }
  )),

  on(
    ArticleAdminCategoryFormActions.saved,
    ArticleAdminCategoryFormActions.cancelled,
    (state): ArticleCategoryAdminFormState => (
      { ...state, editArticleCategory: undefined }
    )
  ),

);
