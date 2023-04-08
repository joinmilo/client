import { createFeatureSelector, createSelector } from '@ngrx/store';
import { transformEventsToCards } from 'src/app/core/utils/card.utils';
import { distinctStartDates } from 'src/app/core/utils/schedule.utils';
import { calendarStateKey } from '../constants/calendar.constant';
import { CalendarState } from './calendar.reducer';

export const selectCalendarState = createFeatureSelector<CalendarState>(calendarStateKey);

export const selectSelectedEvents = createSelector(
  selectCalendarState,
  state => state.events
);

export const selectEventCards = createSelector(
  selectSelectedEvents,
  events => transformEventsToCards(events)
);

export const selectSchedules = createSelector(
  selectCalendarState,
  state => state.schedules
);

export const selectDistinctSchedules = createSelector(
  selectSchedules,
  schedules => distinctStartDates(schedules)
);
