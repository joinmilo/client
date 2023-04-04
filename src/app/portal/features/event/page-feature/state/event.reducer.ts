import { createReducer, on } from '@ngrx/store';
import { EventEntity, Maybe } from 'src/schema/schema';
import { EventPageFeatureActions } from './event.actions';

export interface EventPageFeatureState {
  recentEvents?: Maybe<EventEntity[]>,
}

export const initialState: EventPageFeatureState = { };

export const eventPageFeatureReducer = createReducer(
  initialState,

  on(EventPageFeatureActions.setRecentEvents, (state, action): EventPageFeatureState => (
    { ...state, recentEvents: action.events }
  )),
);
