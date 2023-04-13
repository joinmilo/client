import { createFeatureSelector, createSelector } from '@ngrx/store';
import { guestArticleStateKey } from '../constants/guest-article.constant';
import { GuestArticleState } from './guest-article.reducer';

export const selectGuestArticleState = createFeatureSelector<GuestArticleState>(guestArticleStateKey);

export const selectSavedArticle = createSelector(
  selectGuestArticleState,
  state => state.savedArticle
);

export const selectArticleCategories = createSelector(
  selectGuestArticleState,
  state => state.categories
);