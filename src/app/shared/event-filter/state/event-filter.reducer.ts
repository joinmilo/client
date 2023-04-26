import { createReducer, on } from '@ngrx/store';
import { EventTargetGroupEntity, Maybe } from 'src/schema/schema';
import { EventFilterActions } from './event-filter.actions';

export interface EventFilterState {
  targetGroups?: Maybe<EventTargetGroupEntity[]>,
}

export const initialState: EventFilterState = { };

export const eventFilterReducer = createReducer(
  initialState,

  on(EventFilterActions.setTargetGroups, (state, action): EventFilterState => (
    { ...state, targetGroups: action.result }
  )),

);
