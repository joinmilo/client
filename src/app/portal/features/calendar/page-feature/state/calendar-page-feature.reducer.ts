import { createReducer, on } from '@ngrx/store';
import { Period } from 'src/app/shared/calendar/typings/month';
import { EventEntity, Maybe, ScheduleEntity } from 'src/schema/schema';
import { CalendarPageFeatureActions } from './calendar-page-feature.actions';

export interface CalendarPageFeatureState {
  events?: Maybe<EventEntity>[],
  selectedDay?: Period,
  schedules?: Maybe<ScheduleEntity>[],
}

export const initialState: CalendarPageFeatureState = { };

export const calendarPageFeatureReducer = createReducer(
  initialState,

  on(CalendarPageFeatureActions.setEvents, (state, action): CalendarPageFeatureState => (
    { ...state, events: action.events }
  )),

  on(CalendarPageFeatureActions.daySelected, (state, action): CalendarPageFeatureState => (
    { ...state, selectedDay: action.day }
  )),

  on(CalendarPageFeatureActions.setSchedules, (state, action): CalendarPageFeatureState => (
    { ...state, schedules: action.schedules }
  )),
);
