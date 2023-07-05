import { createFeatureSelector, createSelector } from '@ngrx/store';
import { selectCurrentUser } from 'src/app/core/state/core.selectors';
import { portalEventDetailsStateKey } from '../constants/event-details.constant';
import { PortalEventDetailsState } from './portal-event-details.reducer';

export const selectPortalEventDetailsState = createFeatureSelector<PortalEventDetailsState>(portalEventDetailsStateKey);

export const selectEventDetails = createSelector(
  selectPortalEventDetailsState,
  state => state.details
);

export const selectEventComments = createSelector(
  selectPortalEventDetailsState,
  state => state.comments
);

export const selectEventAttendeeConfiguration = createSelector(
  selectPortalEventDetailsState,
  state => state.details?.attendeeConfiguration);

export const selectEventUserAttendee = createSelector(
  selectEventAttendeeConfiguration,
  selectCurrentUser,
  (attendeeConfiguration, user ) => 
    attendeeConfiguration?.attendees?.find(attendee => attendee?.userContext?.id === user?.id)
  );

export const selectSchedules = createSelector(
  selectPortalEventDetailsState,
  state => state.schedules
);

export const selectScheduleStartDates = createSelector(
  selectSchedules,
  schedules => schedules?.map(schedule => new Date(schedule.startDate))
);
