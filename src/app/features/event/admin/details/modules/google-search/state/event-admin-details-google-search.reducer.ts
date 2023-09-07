import { createReducer, on } from '@ngrx/store';

import { EventEntity, EventScheduleEntity, Maybe } from 'src/app/core/api/generated/schema';
import { EventAdminDetailsGoogleSearchActions } from './event-admin-details-google-search.actions';

export interface EventAdminDetailsGoogleSearchState {
  details?: Maybe<EventEntity>;
  schedules?: Maybe<EventScheduleEntity[]>;
}

export const initialState: EventAdminDetailsGoogleSearchState = {
};

export const eventAdminDetailsGoogleSearchReducer = createReducer(
  initialState,

  on(
    EventAdminDetailsGoogleSearchActions.setDetails,
    (state, action): EventAdminDetailsGoogleSearchState => ({
      ...state, details: action.event
    })),
);
