import { createReducer, on } from '@ngrx/store';
import { ArticleCategoryEntity, ArticleEntity, Maybe } from 'src/app/core/api/generated/schema';
import { ArticleAdminFormActions } from './article-admin-form.actions';

export interface ArticleAdminFormState {
  editArticle?: Maybe<ArticleEntity>;
  categories?: Maybe<ArticleCategoryEntity[]>;
}

export const initialState: ArticleAdminFormState = {
};

export const articleAdminFormReducer = createReducer(
  initialState,

  on(
    ArticleAdminFormActions.setArticle,
    (state, action): ArticleAdminFormState => ({
      ...state, editArticle: action.article
    })),

  on(
    ArticleAdminFormActions.setCategories,
    (state, action): ArticleAdminFormState => ({
      ...state, categories: action.categories
    })),

  on(
    ArticleAdminFormActions.saved,
    ArticleAdminFormActions.cancelled,
    (state): ArticleAdminFormState => (
      { ...state, editArticle: undefined }
    )
  ),

);
