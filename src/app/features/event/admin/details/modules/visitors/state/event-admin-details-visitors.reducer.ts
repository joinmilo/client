import { createReducer, on } from '@ngrx/store';

import { EventEntity, EventScheduleEntity, Maybe } from 'src/app/core/api/generated/schema';
import { EventAdminDetailsVisitorsActions } from './event-admin-details-visitors.actions';

export interface EventAdminDetailsVisitorsState {
  details?: Maybe<EventEntity>;
  schedules?: Maybe<EventScheduleEntity[]>;
}

export const initialState: EventAdminDetailsVisitorsState = {
};

export const eventAdminDetailsVisitorsReducer = createReducer(
  initialState,

  on(
    EventAdminDetailsVisitorsActions.setDetails,
    (state, action): EventAdminDetailsVisitorsState => ({
      ...state, details: action.event
    })),
);
