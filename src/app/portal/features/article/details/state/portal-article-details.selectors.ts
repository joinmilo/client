import { createFeatureSelector, createSelector } from '@ngrx/store';
import { selectUserArticleRatings } from 'src/app/core/state/selectors/user.selectors';
import { portalArticleDetailsStateKey } from '../constants/article-details.constant';
import { PortalArticleDetailsState } from './portal-article-details.reducer';

export const selectPortalArticleDetailsState = createFeatureSelector<PortalArticleDetailsState>(portalArticleDetailsStateKey);

export const selectArticleDetails = createSelector(
  selectPortalArticleDetailsState,
  state => state.details
);

export const selectArticleComments = createSelector(
  selectPortalArticleDetailsState,
  state => state.comments
);

export const selectArticleUserRating = createSelector(
  selectArticleDetails,
  selectUserArticleRatings,
  (article, ratings) =>
    ratings?.find(rating => rating?.article?.id === article?.id)
);

export const selectCalculatedArticleRatings = createSelector(
  selectArticleDetails,
  article => article?.calculatedRatings
);


