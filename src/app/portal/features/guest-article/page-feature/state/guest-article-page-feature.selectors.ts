import { createFeatureSelector, createSelector } from '@ngrx/store';
import { articlesToCards } from 'src/app/shared/card/utils/card.utils';
import { guestArticlePageFeatureStateKey } from '../constants/guest-article-page-feature.constants';
import { GuestArticlePageFeatureState } from './guest-article-page-feature.reducer';

export const selectGuestArticlePageFeatureState = createFeatureSelector<GuestArticlePageFeatureState>(guestArticlePageFeatureStateKey);

export const selectRecentGuestArticles = createSelector(
  selectGuestArticlePageFeatureState,
  state => state.recentGuestArticles
);

export const selectRecentArticleCards = createSelector(
  selectRecentGuestArticles,
  recentGuestArticles => articlesToCards(recentGuestArticles)
);