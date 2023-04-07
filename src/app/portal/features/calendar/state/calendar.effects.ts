import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs';
import { GetSchedulesGQL, QueryOperator, ScheduleEntity } from 'src/schema/schema';
import { CalendarActions } from './calendar.actions';

@Injectable()
export class CalendarEffects {

  getSchedules = createEffect(() => this.actions.pipe(
    ofType(CalendarActions.monthChanged),
    switchMap(action => this.getSchedulesService.watch({
      params: {
        expression: {
          conjunction: {
            operands: [
              {
                entity: {
                  operator: QueryOperator.GreaterOrEqual,
                  path: 'startDate',
                  value: action.month?.startDate.toISOString()
                }
              },
              {
                entity: {
                  operator: QueryOperator.LessOrEqual,
                  path: 'startDate',
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
    private getSchedulesService: GetSchedulesGQL,
  ) {}
}
