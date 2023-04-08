import { createFeatureSelector, createSelector } from '@ngrx/store';
import { transformEventsToCards } from 'src/app/core/utils/card.utils';
import { distinctStartDates } from 'src/app/core/utils/schedule.utils';
import { calendarPageFeatureStateKey } from '../constants/calendar-page-feature.constant';
import { CalendarPageFeatureState } from './calendar-page-feature.reducer';

export const selectCalendarPageFeatureState = createFeatureSelector<CalendarPageFeatureState>(calendarPageFeatureStateKey);

export const selectSelectedEvents = createSelector(
  selectCalendarPageFeatureState,
  state => state.events
);

export const selectEventCards = createSelector(
  selectSelectedEvents,
  events => transformEventsToCards(events)
)

export const selectSchedules = createSelector(
  selectCalendarPageFeatureState,
  state => state.schedules
);

export const selectDistinctSchedules = createSelector(
  selectSchedules,
  schedules => distinctStartDates(schedules)
);
