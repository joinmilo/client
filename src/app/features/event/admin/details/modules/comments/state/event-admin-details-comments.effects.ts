import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { EMPTY, map, of, switchMap, withLatestFrom } from 'rxjs';
import { ConjunctionOperator, PageableList_EventCommentEntity, QueryOperator } from 'src/app/core/api/generated/schema';
import { CoreActions } from 'src/app/core/state/actions/core.actions';
import { FeedbackType } from 'src/app/core/typings/feedback';
import { DeleteEventCommentGQL } from 'src/app/features/event/api/generated/delete-event-comment.mutation.generated';
import { GetEventCommentsGQL } from 'src/app/features/event/api/generated/get-event-comments.query.generated';
import { ConfirmDeleteComponent } from 'src/app/shared/dialogs/confirm-delete/confirm-delete.component';
import { EventAdminDetailsCommentsActions } from './event-admin-details-comments.actions';
import { selectParams, selectPeriod, selectSlug } from './event-admin-details-comments.selectors';

@Injectable()
export class EventAdminDetailsCommentsEffects {

  updateParams = createEffect(() => this.actions.pipe(
    ofType(
      EventAdminDetailsCommentsActions.updateParams,
      EventAdminDetailsCommentsActions.commentDeleted,
    ),
    withLatestFrom(
      this.store.select(selectPeriod),
      this.store.select(selectSlug),
      this.store.select(selectParams)),
    switchMap(([, period, slug, params]) => this.getEventCommentsService.watch({
      params: {
        ...params,
        expression: {
          conjunction: {
            operands: [
              {
                conjunction: {
                  operator: ConjunctionOperator.And,
                  operands: [
                    {
                      entity: {
                        path: 'event.slug',
                        operator: QueryOperator.Equal,
                        value: slug
                      }
                    },
                    {
                    entity: {
                      path: 'created',
                      operator: QueryOperator.GreaterOrEqual,
                      value: period?.startDate.toISOString()
                    }
                  },
                  {
                    entity: {
                      path: 'created',
                      operator: QueryOperator.LessOrEqual,
                      value: period?.endDate.toISOString()
                    }
                  }]
                }
              }
            ]
          }
        }
      }
    }).valueChanges),
    map(response => EventAdminDetailsCommentsActions.setComments(response.data.getEventComments as PageableList_EventCommentEntity))
  ));


  deleteComment = createEffect(() => this.actions.pipe(
    ofType(EventAdminDetailsCommentsActions.deleteComment),
    switchMap(action => this.dialog.open(ConfirmDeleteComponent, { data: action.comment?.content })
      .afterClosed().pipe(
        switchMap(confirmed => confirmed
          ? of(action.comment)
          : EMPTY
        )
      )
    ),
    switchMap(event => this.deleteEventCommentService.mutate({
      id: event?.id
    })),
    map(() => EventAdminDetailsCommentsActions.commentDeleted())
  ));

  eventDeleted = createEffect(() => this.actions.pipe(
    ofType(EventAdminDetailsCommentsActions.commentDeleted),
    map(() => CoreActions.setFeedback({
      type: FeedbackType.Success,
      labelMessage: 'deletedSuccessfully'
    }))
  ));

  constructor(
    private actions: Actions,
    private getEventCommentsService: GetEventCommentsGQL,
    private store: Store,
    private dialog: MatDialog,
    private deleteEventCommentService: DeleteEventCommentGQL
  ) { }
}
