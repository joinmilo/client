import { createReducer, on } from '@ngrx/store';
import { EventFilterQueryParams } from 'src/app/core/typings/filter-params/event-filter-param';
import { Period } from 'src/app/core/typings/period';
import { EventEntity, EventScheduleEntity, FilterSortPaginateInput, Maybe } from 'src/schema/schema';
import { createCalendarParams } from '../utils/params.utils';
import { EventCalendarActions } from './event-calendar.actions';

export interface EventCalendarState {
  events?: Maybe<EventEntity>[],
  eventParams?: FilterSortPaginateInput,
  filter?: Maybe<EventFilterQueryParams>,
  selectedDay?: Maybe<Period>,
  selectedMonth?: Maybe<Period>,
  scheduleParams?: FilterSortPaginateInput,
  schedules?: Maybe<EventScheduleEntity>[],
}

export const initialState: EventCalendarState = { };

export const eventCalendarReducer = createReducer(
  initialState,

  on(EventCalendarActions.daySelected, (state, action): EventCalendarState => (
    {
      ...state,
      selectedDay: action.day,
      eventParams: createCalendarParams(state.filter, action.day)
    }
  )),

  on(EventCalendarActions.monthSelected, (state, action): EventCalendarState => (
    { ...state,
      selectedDay: undefined,
      selectedMonth: action.month,
      scheduleParams: createCalendarParams(state.filter, action.month, false)
    }
  )),

  on(EventCalendarActions.filterUpdated, (state, action): EventCalendarState => (
    {
      ...state,
      filter: action.params,
      eventParams: createCalendarParams(action.params, state.selectedDay),
      scheduleParams: createCalendarParams(action.params, state.selectedMonth, false),
    }
  )),

  on(EventCalendarActions.setEvents, (state, action): EventCalendarState => (
    { ...state, events: action.events }
  )),

  on(EventCalendarActions.setSchedules, (state, action): EventCalendarState => (
    { ...state, schedules: action.schedules }
  )),
);
