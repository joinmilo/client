import { createFeatureSelector, createSelector } from '@ngrx/store';
import { selectArticleDetails } from '../../../article/details/state/portal-article-details.selectors';
import { portalDealDetailsStateKey } from '../constants/deal-details.constant';
import { PortalDealDetailsState } from './portal-deal-details.reducer';

export const selectPortalDealDetailsState = createFeatureSelector<PortalDealDetailsState>(portalDealDetailsStateKey);

export const selectDealDetails = createSelector(
  selectPortalDealDetailsState,
  state => state.details
);

export const selectDealMedia = createSelector(
  selectArticleDetails,
  state => state?.uploads?.map(upload => upload?.media ?? {})
);

