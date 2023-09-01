import { createReducer, on } from '@ngrx/store';

import { EventEntity, EventScheduleEntity, Maybe } from 'src/app/core/api/generated/schema';
import { EventAdminDetailsLayoutActions } from './event-admin-details-layout.actions';

export interface EventAdminDetailsLayoutState {
  details?: Maybe<EventEntity>;
  schedules?: Maybe<EventScheduleEntity[]>;
}

export const initialState: EventAdminDetailsLayoutState = {
};

export const eventAdminDetailsLayoutReducer = createReducer(
  initialState,

  on(
    EventAdminDetailsLayoutActions.setDetails,
    (state, action): EventAdminDetailsLayoutState => ({
      ...state, details: action.event
    })),
);
