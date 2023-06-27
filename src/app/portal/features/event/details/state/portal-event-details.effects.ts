import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs';
import { CoreActions } from 'src/app/core/state/core.actions';
import { FeedbackType } from 'src/app/core/typings/feedback';
import { PortalMenuActions } from 'src/app/portal/shared/menu/state/portal-menu.actions';
import { EventCommentEntity, EventEntity, EventRatingEntity, GetEventCommentsGQL, GetEventGQL, Maybe, QueryOperator, SaveEventRatingGQL } from 'src/schema/schema';
import { PortalEventDetailsActions } from './portal-event-details.actions';

@Injectable()
export class PortalEventDetailsEffects {

  getDetails = createEffect(() => this.actions.pipe(
    ofType(PortalEventDetailsActions.getDetails),
    switchMap((action) => this.getEvent.watch({ 
      entity: {
        slug: action.slug
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
        dir: 'desc',
        expression: {
          entity: {
            path: 'event.slug',
            operator: QueryOperator.Equal,
            value: action.slug
          }
        }
      },
    }).valueChanges),
    map(response => PortalEventDetailsActions.setComments(response.data.getEventComments?.result as Maybe<EventCommentEntity[]>))
  ));

  saveEventRating = createEffect(() => this.actions.pipe(
    ofType(PortalEventDetailsActions.saveEventRating),
    switchMap((action) => this.saveEventRatingService.mutate({
      entity: action.entity
    })),
    map(response => PortalEventDetailsActions.eventRatingSaved(response.data?.saveEventRating as EventRatingEntity))
  ));

  eventRatingSaved = createEffect(() => this.actions.pipe(
    ofType(PortalEventDetailsActions.eventRatingSaved),
    map(() => CoreActions.setFeedback({
      type: FeedbackType.Success,
      labelMessage: 'ratingSaved'
    }))
  ));

  constructor(
    private actions: Actions,
    private getEvent: GetEventGQL,
    private getCommentsService: GetEventCommentsGQL,
    private saveEventRatingService: SaveEventRatingGQL,
  ) {}
}
