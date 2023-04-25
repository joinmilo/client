import { createFeatureSelector, createSelector } from '@ngrx/store';
import { distinctStartDates } from 'src/app/core/utils/schedule.utils';
import { portalCalendarStateKey } from '../constants/portal-calendar.constant';
import { PortalCalendarState } from './portal-calendar.reducer';

export const selectPortalCalendarState = createFeatureSelector<PortalCalendarState>(portalCalendarStateKey);

export const selectSelectedEvents = createSelector(
  selectPortalCalendarState,
  state => state.events
);

export const selectSchedules = createSelector(
  selectPortalCalendarState,
  state => state.schedules
);

export const selectDistinctSchedules = createSelector(
  selectSchedules,
  schedules => distinctStartDates(schedules)
);
