import { createFeatureSelector, createSelector } from '@ngrx/store';
import { guestArticleAdminPublicAuthorsStateKey } from '../constants/guest-article-admin-authors.constants';
import { GuestArticleAdminPublicAuthorsState } from './guest-article-admin-authors.reducer';

export const selectGuestArticleAdminPublicAuthorsState = createFeatureSelector<GuestArticleAdminPublicAuthorsState>(guestArticleAdminPublicAuthorsStateKey);

export const selectPublicAuthorsData = createSelector(
  selectGuestArticleAdminPublicAuthorsState,
  state => state.overviewData
);

export const selectParams = createSelector(
  selectGuestArticleAdminPublicAuthorsState,
  state => state.params
);