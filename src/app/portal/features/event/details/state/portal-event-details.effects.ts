import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs';
import { PortalMenuActions } from 'src/app/portal/shared/menu/state/portal-menu.actions';
import { EventCommentEntity, EventEntity, GetEventCommentsGQL, GetEventGQL, Maybe, QueryOperator } from 'src/schema/schema';
import { PortalEventDetailsActions } from './portal-event-details.actions';

@Injectable()
export class PortalEventDetailsEffects {

  getDetails = createEffect(() => this.actions.pipe(
    ofType(PortalEventDetailsActions.getDetails),
    switchMap((action) => this.getEvent.watch({ 
      entity: {
        id: action.slug
      }
    }).valueChanges),
    map(response => response.data.getEvent?.id
      ? PortalEventDetailsActions.setDetails(response.data.getEvent as EventEntity)
      : PortalMenuActions.notFound())
  ));

  getComments = createEffect(() => this.actions.pipe(
    ofType(PortalEventDetailsActions.getComments),
    switchMap(action => this.getCommentsService.watch({
      params: {
        sort: 'created',
        expression: {
          entity: {
            path: 'event.id',
            operator: QueryOperator.Equal,
            value: action.slug
          }
        }
      },
    }).valueChanges),
    map(response => PortalEventDetailsActions.setComments(response.data.getEventComments?.result as Maybe<EventCommentEntity[]>))
  ));

  constructor(
    private actions: Actions,
    private getEvent: GetEventGQL,
    private getCommentsService: GetEventCommentsGQL,
  ) {}
}