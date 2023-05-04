import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs';
import { PortalMenuActions } from 'src/app/portal/shared/menu/state/portal-menu.actions';
import { EventCommentEntity, EventEntity, GetEventCommentsGQL, GetEventGQL, GetEventsGQL, Maybe, QueryOperator } from 'src/schema/schema';
import { EventActions } from './event.actions';

@Injectable()
export class EventEffects {

  getEventDetails = createEffect(() => this.actions.pipe(
    ofType(EventActions.getEventDetails),
    switchMap((action) => this.getEventService.watch({ 
      entity: {
        id: action.slug
      }
    }).valueChanges),
    map(response => response.data.getEvent?.id
      ? EventActions.setEventDetails(response.data.getEvent as EventEntity)
      : PortalMenuActions.notFound())
  ));

  getSponsoredEvent = createEffect(() => this.actions.pipe(
    ofType(EventActions.getSponsoredEvent),
    switchMap(() => this.getEventService.watch({ 
      entity: {
        sponsored: true
      }
    }).valueChanges),
    map(response => EventActions.setSponsoredEvent(response.data.getEvent as EventEntity))
  ));

  setParams = createEffect(() => this.actions.pipe(
    ofType(EventActions.setParams),
    switchMap(action => this.getEventsService.watch({ 
      params: action.params,
    }).valueChanges),
    map(response => EventActions.setOverviewData(response.data.getEvents?.result as EventEntity[]))
  ));

  getEventComments = createEffect(() => this.actions.pipe(
    ofType(EventActions.getEventComments),
    switchMap(action => this.getCommentsService.watch({
      params: {
        expression: {
          entity: {
            path: "event.id",
            operator: QueryOperator.Equal,
            value: action.slug
          }
        }
      },
    }).valueChanges),
    map(response => EventActions.setEventComments(response.data.getEventComments?.result as Maybe<EventCommentEntity[]>))
  ))

  constructor(
    private actions: Actions,
    private getEventService: GetEventGQL,
    private getEventsService: GetEventsGQL,
    private getCommentsService: GetEventCommentsGQL,
  ) {}
}
