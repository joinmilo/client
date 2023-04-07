import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Period } from 'src/app/core/typings/month';
import { EventEntity, GetEventsGQL, GetSchedulesGQL, QueryOperator, ScheduleEntity } from 'src/schema/schema';

@Injectable()
export class CalendarApiService {

  constructor(
    private getEventsService: GetEventsGQL,
    private getSchedulesService: GetSchedulesGQL,
  ) {}

  public getEventsByDate(day: Period): Observable<EventEntity[]> {
    return this.getEventsService.watch({
      scheduleBegin: day.startDate,
      scheduleEnd: day.endDate,
      params: {
        expression: {
          conjunction: {
            operands: [
              {
                entity: {
                  path: 'schedules.startDate',
                  operator: QueryOperator.GreaterOrEqual,
                  value: day.startDate.toISOString()
                }
              },
              {
                entity: {
                  path: 'schedules.startDate',
                  operator: QueryOperator.LessOrEqual,
                  value: day.endDate.toISOString()
                }
              }
            ]
          }
        }
      }
     }).valueChanges.pipe(
      map(response => response.data.getEvents?.result as EventEntity[])
     )
  }

  public getMonthlySchedules(period: Period): Observable<ScheduleEntity[]> {
    return this.getSchedulesService.watch({
      params: {
        expression: {
          conjunction: {
            operands: [
              {
                entity: {
                  path: 'startDate',
                  operator: QueryOperator.GreaterOrEqual,
                  value: period.startDate.toISOString()
                }
              },
              {
                entity: {
                  path: 'startDate',
                  operator: QueryOperator.LessOrEqual,
                  value: period.endDate.toISOString()
                }
              }
            ]
          }
        }
      }
     }).valueChanges.pipe(
      map(response => response.data.getSchedules?.result as ScheduleEntity[])
     )
  }

}
