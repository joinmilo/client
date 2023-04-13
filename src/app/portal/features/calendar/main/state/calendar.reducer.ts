import { createReducer, on } from '@ngrx/store';
import { Period } from 'src/app/shared/calendar/typings/month';
import { EventEntity, Maybe, ScheduleEntity } from 'src/schema/schema';
import { CalendarActions } from './calendar.actions';

export interface CalendarState {
  events?: Maybe<EventEntity>[],
  selectedDay?: Period,
  schedules?: Maybe<ScheduleEntity>[],
}

export const initialState: CalendarState = { };

export const calendarReducer = createReducer(
  initialState,

  on(CalendarActions.setEvents, (state, action): CalendarState => (
    { ...state, events: action.events }
  )),

  on(CalendarActions.daySelected, (state, action): CalendarState => (
    { ...state, selectedDay: action.day }
  )),

  on(CalendarActions.setSchedules, (state, action): CalendarState => (
    { ...state, schedules: action.schedules }
  )),
);
