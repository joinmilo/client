import { createFeatureSelector, createSelector } from '@ngrx/store';
import { guestArticleAdminOverviewStateKey } from '../constants/guest-article-admin-overview.constants';
import { GuestArticleAdminOverviewState } from './guest-article-admin-overview.reducer';

export const selectGuestArticleAdminOverviewState = createFeatureSelector<GuestArticleAdminOverviewState>(guestArticleAdminOverviewStateKey);

export const selectOverviewData = createSelector(
  selectGuestArticleAdminOverviewState,
  state => state.overviewData
);

export const selectParams = createSelector(
  selectGuestArticleAdminOverviewState,
  state => state.params
);