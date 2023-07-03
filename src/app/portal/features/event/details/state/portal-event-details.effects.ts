import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map, switchMap, withLatestFrom } from 'rxjs';
import { CoreActions } from 'src/app/core/state/core.actions';
import { FeedbackType } from 'src/app/core/typings/feedback';
import { PortalMenuActions } from 'src/app/portal/shared/menu/state/portal-menu.actions';
import { DeleteAttendeeGQL, EventCommentEntity, EventEntity, EventRatingEntity, GetEventCommentsGQL, GetEventGQL, GetSchedulesGQL, Maybe, QueryOperator, SaveAttendeeGQL, SaveEventRatingGQL, ScheduleEntity } from 'src/schema/schema';
import { ConjunctionOperator } from './../../../../../../schema/schema';
import { PortalEventDetailsActions } from './portal-event-details.actions';
import { selectEventDetails } from './portal-event-details.selectors';

@Injectable()
export class PortalEventDetailsEffects {

  getDetails = createEffect(() => this.actions.pipe(
    ofType(
      PortalEventDetailsActions.getDetails,
    ),
    switchMap((action) => this.getEventService.watch({
      entity: {
        slug: action.slug
      }
    }).valueChanges),
    map(response => response.data.getEvent?.id
      ? PortalEventDetailsActions.setDetails(response.data.getEvent as EventEntity)
      : PortalMenuActions.notFound())
  ));

  updateDetails = createEffect(() => this.actions.pipe(
    ofType(PortalEventDetailsActions.attendeeDeleted,
      PortalEventDetailsActions.attendeeSaved,
      PortalEventDetailsActions.eventRatingSaved,
      ),
    withLatestFrom(this.store.select(selectEventDetails)),
    switchMap(([, eventDetails]) => this.getEventService.watch({
      entity: {
        slug: eventDetails?.slug
      }
    }).valueChanges),
    map(response => response.data.getEvent?.id
      ? PortalEventDetailsActions.detailsUpdated(response.data.getEvent as EventEntity)
      : PortalMenuActions.notFound())
  ));

  detailsUpdated = createEffect(() => this.actions.pipe(
    ofType(PortalEventDetailsActions.detailsUpdated),
    map(() => CoreActions.updateUser())
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

  getSchedules = createEffect(() => this.actions.pipe(
    ofType(PortalEventDetailsActions.getSchedules),
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
    map(response => PortalEventDetailsActions
      .setSchedules(response.data.getSchedules?.result as Maybe<ScheduleEntity[]>))
  ));

  saveAttendee = createEffect(() => this.actions.pipe(
    ofType(PortalEventDetailsActions.saveAttendee),
    switchMap((action) => this.saveAttendeeService.mutate({
      entity: action.entity
    })),
    map(response => PortalEventDetailsActions.attendeeSaved(response.data?.saveAttendee))
  ));

  attendeeSaved = createEffect(() => this.actions.pipe(
    ofType(PortalEventDetailsActions.attendeeSaved),
    map(() => CoreActions.setFeedback({
      type: FeedbackType.Success,
      labelMessage: 'attendeeSaved'
    }))
  ));

  deleteAttendee = createEffect(() => this.actions.pipe(
    ofType(PortalEventDetailsActions.deleteAttendee),
    switchMap((action) => this.deleteAttendeeService.mutate({
      id: action.id,
    })),
    map(response => PortalEventDetailsActions.attendeeDeleted(response.data?.deleteAttendee))
  ));

  attendeeDeleted = createEffect(() => this.actions.pipe(
    ofType(PortalEventDetailsActions.attendeeDeleted),
    map(() => CoreActions.setFeedback({
      type: FeedbackType.Success,
      labelMessage: 'youSuccessfullyDeRegistered'
    }))
  ));

  constructor(
    private store: Store,
    private actions: Actions,
    private getEventService: GetEventGQL,
    private getCommentsService: GetEventCommentsGQL,
    private saveEventRatingService: SaveEventRatingGQL,
    private getSchedulesService: GetSchedulesGQL,
    private saveAttendeeService: SaveAttendeeGQL,
    private deleteAttendeeService: DeleteAttendeeGQL,
  ) { }
}
