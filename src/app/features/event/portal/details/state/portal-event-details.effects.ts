import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { filter, map, switchMap, tap, withLatestFrom } from 'rxjs';
import { ConjunctionOperator, EventCommentEntity, EventEntity, EventRatingEntity, EventScheduleEntity, Maybe, QueryOperator } from 'src/app/core/api/generated/schema';
import { CoreUserActions } from 'src/app/core/state/actions/core-user.actions';
import { CoreActions } from 'src/app/core/state/actions/core.actions';
import { selectCurrentUser } from 'src/app/core/state/selectors/user.selectors';
import { FeedbackType } from 'src/app/core/typings/feedback';
import { PortalActions } from 'src/app/portal/state/portal.actions';
import { DeleteEventAttendeeGQL } from '../../../api/generated/delete-eventattendee.mutation.generated';
import { GetEventCommentsGQL } from '../../../api/generated/get-event-comments.query.generated';
import { GetEventDetailsGQL } from '../../../api/generated/get-event-details.query.generated';
import { GetEventSchedulesGQL } from '../../../api/generated/get-event-schedules.query.generated';
import { SaveEventAttendeeGQL } from '../../../api/generated/save-event-attendee.mutation.generated';
import { SaveEventCommentGQL } from '../../../api/generated/save-event-comment.mutation.generated';
import { SaveEventRatingGQL } from '../../../api/generated/save-event-rating.mutation.generated';
import { PortalEventDetailsActions } from './portal-event-details.actions';
import { selectEventAttendeeConfiguration, selectEventDetails, selectEventUserAttendee, selectEventUserRating } from './portal-event-details.selectors';

@Injectable()
export class PortalEventDetailsEffects {

  getDetails = createEffect(() => this.actions.pipe(
    ofType(PortalEventDetailsActions.getDetails),
    switchMap((action) => this.getEventDetailsService.watch({
      entity: {
        slug: action.slug
      }
    }).valueChanges),
    map(response => response.data.getEvent?.id
      ? PortalEventDetailsActions.setDetails(response.data.getEvent as EventEntity)
      : PortalActions.notFound())
  ));

  updateDetails = createEffect(() => this.actions.pipe(
    ofType(PortalEventDetailsActions.attendeeDeleted,
      PortalEventDetailsActions.attendeeSaved,
      PortalEventDetailsActions.ratingSaved,
      PortalEventDetailsActions.commentSaved
    ),
    withLatestFrom(this.store.select(selectEventDetails)),
    switchMap(([, eventDetails]) => this.getEventDetailsService.watch({
      entity: {
        slug: eventDetails?.slug
      }
    }).valueChanges),
    map(response => response.data.getEvent?.id
      ? PortalEventDetailsActions.detailsUpdated(response.data.getEvent as EventEntity)
      : PortalActions.notFound())
  ));

  detailsUpdated = createEffect(() => this.actions.pipe(
    ofType(PortalEventDetailsActions.detailsUpdated),
    map(() => CoreUserActions.updateUser())
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

  saveComment = createEffect(() => this.actions.pipe(
    ofType(PortalEventDetailsActions.saveComment),
    withLatestFrom(
      this.store.select(selectEventDetails),
      this.store.select(selectCurrentUser),
    ),
    map(([action, event, user]) => (
      {
        ...action.entity,
        event: { id: event?.id },
        userContext: { id: user?.id }
      }
    )),
    switchMap(entity => this.saveCommentService.mutate({
      entity
    })),
    map(response => PortalEventDetailsActions.commentSaved(response.data?.saveEventComment as EventCommentEntity))
  ));

  commentSaved = createEffect(() => this.actions.pipe(
    ofType(PortalEventDetailsActions.commentSaved),
    map(() => CoreActions.setFeedback({
      type: FeedbackType.Success,
      labelMessage: 'commentSaved'
    }))
  ));

  saveRating = createEffect(() => this.actions.pipe(
    ofType(PortalEventDetailsActions.saveRating),
    withLatestFrom(
      this.store.select(selectEventDetails),
      this.store.select(selectCurrentUser),
      this.store.select(selectEventUserRating),
    ),
    map(([action, event, user, rating]) => rating?.id
      ? { ...action.entity, id: rating.id }
      : { ...action.entity,
          parent: { id: event?.id },
          userContext: { id: user?.id}
        }
    ),
    switchMap((entity) => this.saveRatingService.mutate({
      entity: entity
    })),
    map(response => PortalEventDetailsActions.ratingSaved(response.data?.saveEventRating as EventRatingEntity))
  ));

  ratingSaved = createEffect(() => this.actions.pipe(
    ofType(PortalEventDetailsActions.ratingSaved),
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
    map(response => PortalEventDetailsActions
      .setSchedules(response.data.getEventSchedules?.result as Maybe<EventScheduleEntity[]>))
  ));

  attendEvent = createEffect(() => this.actions.pipe(
    ofType(PortalEventDetailsActions.attendEvent),
    withLatestFrom(
      this.store.select(selectCurrentUser),
      this.store.select(selectEventAttendeeConfiguration),
    ),
    tap(([, currentUser,]) => !currentUser?.id
      && this.store.dispatch(CoreUserActions.requireLogin())),
    filter(([, currentUser,]) => !!currentUser?.id),
    switchMap(([, currentUser, configuration]) => this.saveEventAttendeeService.mutate({
      entity: {
        configuration: {
          id: configuration?.id
        },
        userContext: {
          id: currentUser?.id
        },
        approved: false
      }
    })),
    map(response => PortalEventDetailsActions.attendeeSaved(response.data?.saveEventAttendee))
  ));

  attendeeSaved = createEffect(() => this.actions.pipe(
    ofType(PortalEventDetailsActions.attendeeSaved),
    map(() => CoreActions.setFeedback({
      type: FeedbackType.Success,
      labelMessage: 'attendeeSaved'
    }))
  ));

  cancelAttendeeRegistration = createEffect(() => this.actions.pipe(
    ofType(PortalEventDetailsActions.cancelAttendeeRegistration),
    withLatestFrom(
      this.store.select(selectEventUserAttendee),
    ),
    switchMap(([, attendee]) => this.deleteAttendeeService.mutate({
      id: attendee?.id,
    })),
    map(response => PortalEventDetailsActions.attendeeDeleted(response.data?.deleteEventAttendee))
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
    private deleteAttendeeService: DeleteEventAttendeeGQL,
    private getEventDetailsService: GetEventDetailsGQL,
    private getCommentsService: GetEventCommentsGQL,
    private getSchedulesService: GetEventSchedulesGQL,
    private saveEventAttendeeService: SaveEventAttendeeGQL,
    private saveRatingService: SaveEventRatingGQL,
    private saveCommentService: SaveEventCommentGQL,
  ) { }
}
