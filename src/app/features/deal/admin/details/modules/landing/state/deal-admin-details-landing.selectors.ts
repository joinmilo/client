import { createFeatureSelector, createSelector } from '@ngrx/store';
import { dealAdminDetailsLandingStateKey } from '../constants/deal-admin-details-landing.constants';
import { DealAdminDetailsLandingState } from './deal-admin-details-landing.reducer';

export const selectDealAdminDetailsLandingState = createFeatureSelector<DealAdminDetailsLandingState>(dealAdminDetailsLandingStateKey);

export const selectDealAdminDetailsLanding = createSelector(
  selectDealAdminDetailsLandingState,
  state => state.details
);

export const selectDealAdminDetailsLandingMedia = createSelector(
  selectDealAdminDetailsLandingState,
  state => state.details?.uploads?.map(upload => upload?.media ?? {})
);