import { createReducer, on } from '@ngrx/store';
import { EventEntity, Maybe } from 'src/schema/schema';
import { EventActions } from './event.actions';

export interface EventState {
  eventDetails?: Maybe<EventEntity>,
}

export const initialState: EventState = { };

export const eventReducer = createReducer(
  initialState,

  on(EventActions.setEventDetails, (state, action): EventState => (
    { ...state, eventDetails: action.event }
  )),
  
);
