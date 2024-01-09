import { createFeatureSelector, createSelector } from '@ngrx/store';
import { contestPortalDetailsLandingStateKey } from '../constants/contest-details-landing.constant';
import { PortalContestDetailsLandingState } from './portal-contest-details-landing.reducer';


export const selectPortalContestDetailsLandingState = createFeatureSelector<PortalContestDetailsLandingState>(contestPortalDetailsLandingStateKey);

export const selectContestDetails = createSelector(
  selectPortalContestDetailsLandingState,
  state => state.details
);

export const selectContestMedia = createSelector(
  selectContestDetails,
  state => state?.uploads?.map(upload => upload?.media ?? {})
);
