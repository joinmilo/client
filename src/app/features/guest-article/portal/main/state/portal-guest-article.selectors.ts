import { createFeatureSelector, createSelector } from '@ngrx/store';
import { portalGuestArticleStateKey } from '../constants/portal-guest-article.constants';
import { PortalGuestArticleState } from './portal-guest-article.reducer';

export const selectPortalGuestArticleState = createFeatureSelector<PortalGuestArticleState>(portalGuestArticleStateKey);

export const selectEditableArticle = createSelector(
  selectPortalGuestArticleState,
  state => state.editArticle
);