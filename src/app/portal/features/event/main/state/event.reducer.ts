import { createReducer, on } from '@ngrx/store';
import { DisplayType } from 'src/app/core/typings/overview-display';
import { EventEntity, Maybe } from 'src/schema/schema';
import { EventActions } from './event.actions';

export interface EventState {
  eventDetails?: Maybe<EventEntity>,
  sponsoredEvent?: Maybe<EventEntity>,
  overviewDisplayType?: DisplayType,
  overviewData?: EventEntity[],
}

export const initialState: EventState = {
};

export const eventReducer = createReducer(
  initialState,

  on(EventActions.setEventDetails, (state, action): EventState => (
    { ...state, eventDetails: action.event }
  )),

  on(EventActions.setSponsoredEvent, (state, action): EventState => (
    { ...state, sponsoredEvent: action.event }
  )),

  on(EventActions.overviewDisplayChanged, (state, action): EventState => (
    { ...state, overviewDisplayType: action.displayType }
  )),

  on(EventActions.setOverviewData, (state, action): EventState => (
    { ...state, overviewData: action.events }
  )),
  
);
