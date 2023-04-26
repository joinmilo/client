import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs';
import { Period } from 'src/app/shared/calendar/typings/month';
import { PortalCalendarApiService } from '../../main/services/calendar-api.service';
import { CalendarPageFeatureActions } from './calendar-page-feature.actions';

@Injectable()
export class CalendarPageFeatureEffects {

  getEvents = createEffect(() => this.actions.pipe(
    ofType(CalendarPageFeatureActions.daySelected),
    switchMap((action) => this.calendarApiService.getEventsByDate(action.day as Period)),
    map(events => CalendarPageFeatureActions.setEvents(events))
  ));

  getSchedules = createEffect(() => this.actions.pipe(
    ofType(CalendarPageFeatureActions.monthSelected),
    switchMap(action => this.calendarApiService.getMonthlySchedules(action.month as Period)),
    map(schedules => CalendarPageFeatureActions.setSchedules(schedules))
  ));

  constructor(
    private actions: Actions,
    private calendarApiService: PortalCalendarApiService,
  ) {}
}
