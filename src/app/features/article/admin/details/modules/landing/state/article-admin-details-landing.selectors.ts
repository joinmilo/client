import { createFeatureSelector, createSelector } from '@ngrx/store';
import { articleAdminDetailsLandingStateKey } from '../constants/article-admin-details-landing.constants';
import { ArticleAdminDetailsLandingState } from './article-admin-details-landing.reducer';

export const selectArticleAdminDetailsLandingState = createFeatureSelector<ArticleAdminDetailsLandingState>(articleAdminDetailsLandingStateKey);

export const selectArticleAdminDetailsLanding = createSelector(
  selectArticleAdminDetailsLandingState,
  state => state.details
);

export const selectArticleAdminDetailsLandingMedia = createSelector(
  selectArticleAdminDetailsLandingState,
  state => state.details?.uploads?.map(upload => upload?.media ?? {})
);
