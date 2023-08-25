import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs';
import { AdminActions } from 'src/app/admin/state/admin.actions';
import { ConjunctionOperator, EventEntity, EventScheduleEntity, GetEventGQL, GetEventSchedulesGQL, Maybe, QueryOperator } from 'src/schema/schema';
import { EventAdminDetailsLandingActions } from './event-admin-details-landing.actions';

@Injectable()
export class EventAdminDetailsLandingEffects {

  getDetails = createEffect(() => this.actions.pipe(
    ofType(EventAdminDetailsLandingActions.getDetails),
    switchMap((action) => this.getEventService.watch({
      entity: {
        slug: action.slug
      }
    }).valueChanges),
    map(response => response.data.getEvent?.id
      ? EventAdminDetailsLandingActions.setDetails(response.data.getEvent as EventEntity)
      : AdminActions.notFound())
  ));

  getSchedules = createEffect(() => this.actions.pipe(
    ofType(EventAdminDetailsLandingActions.getSchedules),
    switchMap(action => this.getSchedulesService.watch({
      params: {
        sort: 'created',
        dir: 'desc',
        expression: {
          conjunction: {
            operands: [
              {
                conjunction: {
                  operator: ConjunctionOperator.And,
                  operands: [
                    {
                      entity: {
                        path: 'event.id',
                        operator: QueryOperator.Equal,
                        value: action.event_id
                      }
                    },
                    {
                      entity: {
                        path: 'startDate',
                        operator: QueryOperator.GreaterOrEqual,
                        value: action.startDate
                      }
                    },
                    {
                      entity: {
                        path: 'startDate',
                        operator: QueryOperator.LessOrEqual,
                        value: action.endDate
                      }
                    }
                  ]
                }
              }
            ]
          }
        },
      },
    }).valueChanges),
    map(response => EventAdminDetailsLandingActions
      .setSchedules(response.data.getEventSchedules?.result as Maybe<EventScheduleEntity[]>))
  ));

  constructor(
    private actions: Actions,
    private getEventService: GetEventGQL,
    private getSchedulesService: GetEventSchedulesGQL,
  ) {}
}
