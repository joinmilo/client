import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CardInput } from 'src/app/core/typings/card';
import { distinctStartDates } from 'src/app/core/utils/schedule.utils';
import { calendarPageFeatureStateKey } from '../constants/calendar-page-feature.constant';
import { CalendarPageFeatureState } from './calendar-page-feature.reducer';

export const selectCalendarPageFeatureState = createFeatureSelector<CalendarPageFeatureState>(calendarPageFeatureStateKey);

export const selectSelectedEvents = createSelector(
  selectCalendarPageFeatureState,
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
  selectCalendarPageFeatureState,
  state => state.schedules
);

export const selectDistinctSchedules = createSelector(
  selectSchedules,
  schedules => distinctStartDates(schedules)
);
