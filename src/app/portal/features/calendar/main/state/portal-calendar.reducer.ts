import { createReducer, on } from '@ngrx/store';
import { Period } from 'src/app/shared/calendar/typings/month';
import { EventEntity, Maybe, ScheduleEntity } from 'src/schema/schema';
import { PortalCalendarActions } from './portal-calendar.actions';

export interface PortalCalendarState {
  events?: Maybe<EventEntity>[],
  selectedDay?: Period,
  schedules?: Maybe<ScheduleEntity>[],
}

export const initialState: PortalCalendarState = { };

export const portalCalendarReducer = createReducer(
  initialState,

  on(PortalCalendarActions.setEvents, (state, action): PortalCalendarState => (
    { ...state, events: action.events }
  )),

  on(PortalCalendarActions.daySelected, (state, action): PortalCalendarState => (
    { ...state, selectedDay: action.day }
  )),

  on(PortalCalendarActions.setSchedules, (state, action): PortalCalendarState => (
    { ...state, schedules: action.schedules }
  )),
);
