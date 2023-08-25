import { createReducer, on } from '@ngrx/store';
import { EventEntity, EventScheduleEntity, Maybe } from 'src/schema/schema';
import { EventAdminDetailsLandingActions } from './event-admin-details-landing.actions';

export interface EventAdminDetailsLandingState {
  details?: Maybe<EventEntity>;
  schedules?: Maybe<EventScheduleEntity[]>;
}

export const initialState: EventAdminDetailsLandingState = {
};

export const eventAdminDetailsLandingReducer = createReducer(
  initialState,

  on(
    EventAdminDetailsLandingActions.setDetails,
    (state, action): EventAdminDetailsLandingState => ({
      ...state, details: action.event
    })),

  on(EventAdminDetailsLandingActions.setSchedules, (state, action): EventAdminDetailsLandingState => (
    { ...state, schedules: action.schedules }
  )),
);
