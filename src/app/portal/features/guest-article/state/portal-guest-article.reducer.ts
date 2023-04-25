import { createReducer, on } from '@ngrx/store';
import { ArticleEntity, Maybe } from 'src/schema/schema';
import { ArticleCategoryEntity } from '../../../../../schema/schema';
import { PortalGuestArticleActions } from './portal-guest-article.actions';

export interface PortalGuestArticleState {
  savedArticle?: Maybe<ArticleEntity>;
  categories?: Maybe<ArticleCategoryEntity[]>
}

export const initialState: PortalGuestArticleState = {};

export const portalGuestArticleReducer = createReducer(
  initialState,

  on(PortalGuestArticleActions.saveArticle, (state, action): PortalGuestArticleState => (
    { ...state, savedArticle: action.entity }
  )),

  on(PortalGuestArticleActions.setArticleCategories, (state, action): PortalGuestArticleState => (
    { ...state, categories: action.categories }
  )),
);
