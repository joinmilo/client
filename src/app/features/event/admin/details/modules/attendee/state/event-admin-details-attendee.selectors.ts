import { createFeatureSelector, createSelector } from '@ngrx/store';
import { eventAdminDetailsAttendeeStateKey } from '../constants/event-admin-details-comments.constants';
import { EventAdminDetailsAttendeeState } from './event-admin-details-attendee.reducer';


export const selectEventAdminDetailsAttendeeState = createFeatureSelector<EventAdminDetailsAttendeeState>(eventAdminDetailsAttendeeStateKey);

export const selectEventAdminDetailsAttendee = createSelector(
  selectEventAdminDetailsAttendeeState,
  state => state.attendees
);

export const selectSlug = createSelector(
  selectEventAdminDetailsAttendeeState,
  state => state.slug
);

export const selectParams = createSelector(
  selectEventAdminDetailsAttendeeState,
  state => state.params
);