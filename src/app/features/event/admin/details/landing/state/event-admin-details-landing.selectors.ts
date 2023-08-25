import { createFeatureSelector, createSelector } from '@ngrx/store';
import { eventAdminDetailsLandingStateKey } from '../../constants/event-admin-details.constants';
import { EventAdminDetailsLandingState } from './event-admin-details-landing.reducer';

export const selectEventAdminDetailsLandingState = createFeatureSelector<EventAdminDetailsLandingState>(eventAdminDetailsLandingStateKey);

export const selectEventAdminDetailsLanding = createSelector(
  selectEventAdminDetailsLandingState,
  state => state.details
);

export const selectEventAdminDetailsLandingMedia = createSelector(
  selectEventAdminDetailsLandingState,
  state => state.details?.uploads?.map(upload => upload?.media ?? {})
);

export const selectEventAdminDetailsLandingSchedules = createSelector(
  selectEventAdminDetailsLandingState,
  state => state.schedules
);