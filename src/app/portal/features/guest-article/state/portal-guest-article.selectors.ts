import { createFeatureSelector, createSelector } from '@ngrx/store';
import { portalGuestArticleStateKey } from '../constants/portal-guest-article.constant';
import { PortalGuestArticleState } from './portal-guest-article.reducer';

export const selectPortalGuestArticleState = createFeatureSelector<PortalGuestArticleState>(portalGuestArticleStateKey);

export const selectSavedArticle = createSelector(
  selectPortalGuestArticleState,
  state => state.savedArticle
);

export const selectArticleCategories = createSelector(
  selectPortalGuestArticleState,
  state => state.categories
);