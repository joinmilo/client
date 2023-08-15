import { createFeatureSelector, createSelector } from '@ngrx/store';
import { selectCurrentUser, selectFriendUsers, selectUserEventRatings } from 'src/app/core/state/selectors/user.selectors';
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
  (attendeeConfiguration, user) =>
    attendeeConfiguration?.attendees?.find(attendee => attendee?.userContext?.id === user?.id)
);

export const selectAttendingFriends = createSelector(
  selectFriendUsers,
  selectEventAttendeeConfiguration,
  (friends, attendeeConfiguration) =>
    friends?.filter((friend) =>
      attendeeConfiguration?.attendees?.some((attendee) =>
        attendee?.userContext?.id === friend?.id
      )
    )
);

export const selectEventUserRating = createSelector(
  selectEventDetails,
  selectUserEventRatings,
  (event, ratings) =>
    ratings?.find(rating => rating?.event?.id === event?.id)
);

export const selectCalculatedEventRatings = createSelector(
  selectEventDetails,
  event => event?.calculatedRatings
);

export const selectSchedules = createSelector(
  selectPortalEventDetailsState,
  state => state.schedules
);

export const selectEventMedia = createSelector(
  selectEventDetails,
  state => state?.uploads?.map(upload => upload?.media ?? {})
);

