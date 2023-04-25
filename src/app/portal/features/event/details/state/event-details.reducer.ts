import { createReducer, on } from '@ngrx/store';
import { EventEntity, Maybe } from 'src/schema/schema';
import { PortalEventDetailsActions } from './event-details.actions';

export interface PortalEventDetailsState {
  eventDetails?: Maybe<EventEntity>,
}

export const initialState: PortalEventDetailsState = {
};

export const portalEventDetailsReducer = createReducer(
  initialState,

  on(PortalEventDetailsActions.setEventDetails, (state, action): PortalEventDetailsState => (
    { ...state, eventDetails: action.event }
  )),

);
