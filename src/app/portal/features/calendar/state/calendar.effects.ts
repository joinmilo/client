import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map, switchMap } from 'rxjs';
import { EventEntity, GetEventsGQL, GetSchedulesGQL, QueryOperator, ScheduleEntity } from 'src/schema/schema';
import { CalendarActions } from './calendar.actions';
import { selectSelectedDay } from './calendar.selectors';

@Injectable()
export class CalendarEffects {

  getEvents = createEffect(() => this.actions.pipe(
    ofType(CalendarActions.daySelected),
    concatLatestFrom(() => [
      this.store.select(selectSelectedDay)
    ]),
    switchMap(([action, day]) => this.getEventsService.watch({
      scheduleBegin: day?.startDate,
      scheduleEnd: day?.endDate,
      params: {
        expression: {
          conjunction: {
            operands: [
              {
                entity: {
                  path: 'schedules.startDate',
                  operator: QueryOperator.GreaterOrEqual,
                  value: action.day?.startDate.toISOString()
                }
              },
              {
                entity: {
                  path: 'schedules.startDate',
                  operator: QueryOperator.LessOrEqual,
                  value: action.day?.endDate.toISOString()
                }
              }
            ]
          }
        }
      }
     }).valueChanges),
    map(response => CalendarActions.setEvents(response.data.getEvents?.result as EventEntity[]))
  ));

  getSchedules = createEffect(() => this.actions.pipe(
    ofType(CalendarActions.monthSelected),
    switchMap(action => this.getSchedulesService.watch({
      params: {
        expression: {
          conjunction: {
            operands: [
              {
                entity: {
                  path: 'startDate',
                  operator: QueryOperator.GreaterOrEqual,
                  value: action.month?.startDate.toISOString()
                }
              },
              {
                entity: {
                  path: 'startDate',
                  operator: QueryOperator.LessOrEqual,
                  value: action.month?.endDate.toISOString()
                }
              }
            ]
          }
        }
      }
     }).valueChanges),
    map(response => CalendarActions.setSchedules(response.data.getSchedules?.result as ScheduleEntity[]))
  ));

  constructor(
    private actions: Actions,
    private getEventsService: GetEventsGQL,
    private getSchedulesService: GetSchedulesGQL,
    private store: Store,
  ) {}
}
