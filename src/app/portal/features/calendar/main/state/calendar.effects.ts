import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs';
import { Period } from 'src/app/shared/calendar/typings/month';
import { CalendarApiService } from '../../common/services/calendar-api.service';
import { CalendarActions } from './calendar.actions';

@Injectable()
export class CalendarEffects {

  getEvents = createEffect(() => this.actions.pipe(
    ofType(CalendarActions.daySelected),
    switchMap((action) => this.calendarApiService.getEventsByDate(action.day as Period)),
    map(events => CalendarActions.setEvents(events))
  ));

  getSchedules = createEffect(() => this.actions.pipe(
    ofType(CalendarActions.monthSelected),
    switchMap(action => this.calendarApiService.getMonthlySchedules(action.month as Period)),
    map(schedules => CalendarActions.setSchedules(schedules))
  ));

  constructor(
    private actions: Actions,
    private calendarApiService: CalendarApiService,
  ) {}
}
