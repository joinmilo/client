import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { filter, map, switchMap, withLatestFrom } from 'rxjs';
import { EventEntity, EventScheduleEntity, GetEventSchedulesGQL, GetEventsGQL } from 'src/schema/schema';
import { EventCalendarActions } from './event-calendar.actions';
import { selectEventParams, selectScheduleParams, selectSelectedDay } from './event-calendar.selectors';

@Injectable()
export class EventCalendarEffects {

  getEvents = createEffect(() => this.actions.pipe(
    ofType(
      EventCalendarActions.daySelected,
      EventCalendarActions.filterUpdated,
    ),
    withLatestFrom(
      this.store.select(selectEventParams),
      this.store.select(selectSelectedDay)
    ),
    filter(([, , day]) => !!day),
    switchMap(([, params, day]) => this.getEventsService.watch({
      scheduleBegin: day?.startDate,
      scheduleEnd: day?.endDate,
      params
    }).valueChanges),
    map(response => EventCalendarActions.setEvents(response.data.getEvents?.result as EventEntity[]))
  ));

  getSchedules = createEffect(() => this.actions.pipe(
    ofType(
      EventCalendarActions.monthSelected,
      EventCalendarActions.filterUpdated,
    ),
    withLatestFrom(this.store.select(selectScheduleParams)),
    switchMap(([, params]) => this.getEventSchedulesService.watch({
      params
    }).valueChanges),
    map(response => EventCalendarActions.setSchedules(response.data.getEventSchedules?.result as EventScheduleEntity[]))
  ));

  constructor(
    private actions: Actions,
    private getEventsService: GetEventsGQL,
    private getEventSchedulesService: GetEventSchedulesGQL,
    private store: Store,
  ) {}
}
