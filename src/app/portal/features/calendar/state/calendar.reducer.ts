import { createReducer, on } from '@ngrx/store';
import { Maybe, ScheduleEntity } from 'src/schema/schema';
import { CalendarActions } from './calendar.actions';

export interface CalendarState {
  schedules?: Maybe<ScheduleEntity>[],
}

export const initialState: CalendarState = { };

export const calendarReducer = createReducer(
  initialState,

  on(CalendarActions.setSchedules, (state, action): CalendarState => (
    { ...state, schedules: action.schedules }
  )),
);
