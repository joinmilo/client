import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { filter, map, switchMap, tap, withLatestFrom } from 'rxjs';
import { CoreUserActions } from 'src/app/core/state/actions/core-user.actions';
import { CoreActions } from 'src/app/core/state/actions/core.actions';
import { selectCurrentUser } from 'src/app/core/state/selectors/user.selectors';
import { FeedbackType } from 'src/app/core/typings/feedback';
import { PortalMenuActions } from 'src/app/portal/shared/menu/state/portal-menu.actions';
import { DeleteAttendeeGQL, EventCommentEntity, EventEntity, EventRatingEntity, GetEventCommentsGQL, GetEventGQL, GetSchedulesGQL, Maybe, QueryOperator, SaveAttendeeGQL, SaveEventCommentGQL, SaveEventRatingGQL, ScheduleEntity } from 'src/schema/schema';
import { ConjunctionOperator } from './../../../../../../schema/schema';
import { PortalEventDetailsActions } from './portal-event-details.actions';
import { selectEventAttendeeConfiguration, selectEventDetails, selectEventUserAttendee, selectEventUserRating } from './portal-event-details.selectors';

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
      PortalEventDetailsActions.eventCommentSaved
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

  saveEventRating = createEffect(() => this.actions.pipe(
    ofType(PortalEventDetailsActions.saveEventRating),
    withLatestFrom(
      this.store.select(selectEventDetails),
      this.store.select(selectCurrentUser),
      this.store.select(selectEventUserRating),
    ),
    map(([action, event, user, rating]) => rating?.id
      ? { ...action.entity, id: rating.id }
      : { ...action.entity,
          event: { id: event?.id },
          userContext: { id: user?.id}
        }
    ),
    switchMap((entity) => this.saveEventRatingService.mutate({
      entity: entity
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

  attendEvent = createEffect(() => this.actions.pipe(
    ofType(PortalEventDetailsActions.attendEvent),
    withLatestFrom(
      this.store.select(selectCurrentUser),
      this.store.select(selectEventAttendeeConfiguration),
    ),
    tap(([, currentUser,]) => !currentUser?.id
      && this.router.navigate(['/user', 'login-required'])),
    filter(([, currentUser,]) => !!currentUser?.id),
    switchMap(([, currentUser, configuration]) => this.saveAttendeeService.mutate({
      entity: {
        configuration: {
          id: configuration?.id
        },
        userContext: {
          id: currentUser?.id
        }
      }
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

  cancelAttendeeRegistration = createEffect(() => this.actions.pipe(
    ofType(PortalEventDetailsActions.cancelAttendeeRegistration),
    withLatestFrom(
      this.store.select(selectEventUserAttendee),
    ),
    switchMap(([, attendee]) => this.deleteAttendeeService.mutate({
      id: attendee?.id,
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

  saveEventComment = createEffect(() => this.actions.pipe(
    ofType(PortalEventDetailsActions.saveEventComment),
    switchMap((action) => this.saveEventCommentService.mutate({
      entity: action.entity
    })),
    map(response => PortalEventDetailsActions.eventCommentSaved(response.data?.saveEventComment as EventCommentEntity))
  ));

  eventCommentSaved = createEffect(() => this.actions.pipe(
    ofType(PortalEventDetailsActions.eventCommentSaved),
    map(() => CoreActions.setFeedback({
      type: FeedbackType.Success,
      labelMessage: 'commentSaved'
    }))
  ));

  constructor(
    private store: Store,
    private actions: Actions,
    private deleteAttendeeService: DeleteAttendeeGQL,
    private getEventService: GetEventGQL,
    private getCommentsService: GetEventCommentsGQL,
    private getSchedulesService: GetSchedulesGQL,
    private saveAttendeeService: SaveAttendeeGQL,
    private saveEventRatingService: SaveEventRatingGQL,
    private saveEventCommentService: SaveEventCommentGQL,
    private router: Router,
  ) { }
}
