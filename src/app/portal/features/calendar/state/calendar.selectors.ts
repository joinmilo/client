import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ReducedSchedule } from 'src/app/core/typings/reduced-schedule';
import { EventEntity } from 'src/schema/schema';
import { calendarStateKey } from '../constants/calendar.constant';
import { CalendarState } from './calendar.reducer';

export const selectCalendarState = createFeatureSelector<CalendarState>(calendarStateKey);

export const selectSchedules = createSelector(
  selectCalendarState,
  state => state.schedules
);

export const selectDistinctSchedules = createSelector(
  selectSchedules,
  schedules => schedules?.reduce((result, current) => {
    const startDate = new Date(current?.startDate);

    const existing = result.find(obj => obj?.startDate.toDateString() === startDate.toDateString());

    existing
      ? existing.events.push(current?.event as EventEntity)
      : result.push({
          startDate,
          events: [current?.event as EventEntity],
        });

    return result;
  }, [] as Array<ReducedSchedule>)
);
