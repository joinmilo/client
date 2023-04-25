import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs';
import { Period } from 'src/app/shared/calendar/typings/month';
import { CalendarApiService } from '../../common/services/calendar-api.service';
import { PortalCalendarActions } from './portal-calendar.actions';

@Injectable()
export class PortalCalendarEffects {

  getEvents = createEffect(() => this.actions.pipe(
    ofType(PortalCalendarActions.daySelected),
    switchMap((action) => this.calendarApiService.getEventsByDate(action.day as Period)),
    map(events => PortalCalendarActions.setEvents(events))
  ));

  getSchedules = createEffect(() => this.actions.pipe(
    ofType(PortalCalendarActions.monthSelected),
    switchMap(action => this.calendarApiService.getMonthlySchedules(action.month as Period)),
    map(schedules => PortalCalendarActions.setSchedules(schedules))
  ));

  constructor(
    private actions: Actions,
    private calendarApiService: CalendarApiService,
  ) {}
}
