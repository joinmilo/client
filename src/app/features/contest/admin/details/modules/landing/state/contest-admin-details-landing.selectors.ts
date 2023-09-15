import { createFeatureSelector, createSelector } from '@ngrx/store';
import { contestAdminDetailsLandingStateKey } from '../constants/contest-admin-details-landing.constants';
import { ContestAdminDetailsLandingState } from './contest-admin-details-landing.reducer';

export const selectContestAdminDetailsLandingState = createFeatureSelector<ContestAdminDetailsLandingState>(contestAdminDetailsLandingStateKey);

export const selectContestAdminDetailsLanding = createSelector(
  selectContestAdminDetailsLandingState,
  state => state.details
);

export const selectContestAdminDetailsLandingMedia = createSelector(
  selectContestAdminDetailsLandingState,
  state => state.details?.uploads?.map(upload => upload?.media ?? {})
);
