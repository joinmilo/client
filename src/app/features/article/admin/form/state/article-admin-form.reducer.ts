import { createReducer, on } from '@ngrx/store';
import { ArticleEntity, Maybe } from 'src/app/core/api/generated/schema';
import { ArticleAdminFormActions } from './article-admin-form.actions';

export interface ArticleAdminFormState {
  article?: Maybe<ArticleEntity>;
}

export const initialState: ArticleAdminFormState = {
};

export const articleAdminFormReducer = createReducer(
  initialState,

  on(
    ArticleAdminFormActions.setArticle,
    (state, action): ArticleAdminFormState => ({
      ...state, article: action.article
    })),

);
