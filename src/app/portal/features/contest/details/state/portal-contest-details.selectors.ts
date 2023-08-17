import { createFeatureSelector, createSelector } from '@ngrx/store';
import { portalContestDetailsStateKey } from '../constants/contest-details.constant';
import { PortalContestDetailsState } from './portal-contest-details.reducer';

export const selectPortalContestDetailsState = createFeatureSelector<PortalContestDetailsState>(portalContestDetailsStateKey);

export const selectContestDetails = createSelector(
  selectPortalContestDetailsState,
  state => state.details
);

export const selectContestComments = createSelector(
  selectPortalContestDetailsState,
  state => state.comments
);

export const selectContestMedia = createSelector(
  selectContestDetails,
  state => state?.uploads?.map(upload => upload?.media ?? {})
);