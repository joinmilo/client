import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CardInput } from 'src/app/core/typings/card';
import { distinctStartDates } from 'src/app/core/utils/schedule.utils';
import { calendarStateKey } from '../constants/calendar.constant';
import { CalendarState } from './calendar.reducer';

export const selectCalendarState = createFeatureSelector<CalendarState>(calendarStateKey);

export const selectSelectedEvents = createSelector(
  selectCalendarState,
  state => state.events
);

//TODO
export const selectEventCards = createSelector(
  selectSelectedEvents,
  events => events?.map(event => ({
    address: event?.address,
    categoryTranslatables: event?.category?.translatables,
    categoryTranslatableField: 'name',
    creator: event?.contact?.name,
    creatorImage: event?.creator?.titleImage,
    date: event?.schedule?.startDate,
    dateTime: true,
    image: event?.cardImage,
    textTranslatableField: 'shortDescription',
    titleTranslatableField: 'name',
    translatables: event?.translatables,
  })) as CardInput[]
);

export const selectSchedules = createSelector(
  selectCalendarState,
  state => state.schedules
);

export const selectDistinctSchedules = createSelector(
  selectSchedules,
  schedules => distinctStartDates(schedules)
);
