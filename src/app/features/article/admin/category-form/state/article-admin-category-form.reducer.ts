import { createReducer, on } from '@ngrx/store';
import { ArticleCategoryEntity, Maybe } from 'src/app/core/api/generated/schema';
import { ArticleAdminCategoryFormActions } from './article-admin-category-form.actions';

export interface ArticleAdminFormState {
  editArticleCategory?: Maybe<ArticleCategoryEntity>;
  categories?: Maybe<ArticleCategoryEntity[]>;
}

export const initialState: ArticleAdminFormState = {
};

export const articleAdminFormReducer = createReducer(
  initialState,

  on(
    ArticleAdminCategoryFormActions.saved,
    ArticleAdminCategoryFormActions.cancelled,
    (state): ArticleAdminFormState => (
      { ...state, editArticleCategory: undefined }
    )
  ),

);
