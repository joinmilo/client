import { createReducer, on } from '@ngrx/store';
import { ArticleEntity, Maybe } from 'src/schema/schema';
import { ArticleCategoryEntity } from './../../../../../schema/schema';
import { GuestArticleActions } from './guest-article.actions';

export interface GuestArticleState {
  savedArticle?: Maybe<ArticleEntity>;
  categories?: Maybe<ArticleCategoryEntity[]>
}

export const initialState: GuestArticleState = {};

export const reportReducer = createReducer(
  initialState,

  on(GuestArticleActions.saveArticle, (state, action): GuestArticleState => (
    { ...state, savedArticle: action.entity }
  )),

  on(GuestArticleActions.setArticleCategories, (state, action): GuestArticleState => (
    { ...state, categories: action.categories }
  )),
);
