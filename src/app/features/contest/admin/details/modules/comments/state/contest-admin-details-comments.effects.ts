import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { EMPTY, map, of, switchMap, withLatestFrom } from 'rxjs';
import { ConjunctionOperator, PageableList_ContestCommentEntity, QueryOperator } from 'src/app/core/api/generated/schema';
import { CoreActions } from 'src/app/core/state/actions/core.actions';
import { FeedbackType } from 'src/app/core/typings/feedback';
import { DeleteContestCommentGQL } from 'src/app/features/contest/api/generated/delete-contest-comment.mutation.generated';
import { GetContestCommentsGQL } from 'src/app/features/contest/api/generated/get-contest-comments.query.generated';
import { ConfirmService } from 'src/app/shared/confirm/service/confirm.service';
import { ConfirmType } from 'src/app/shared/confirm/typings/confirm';
import { ContestAdminDetailsCommentsActions } from './contest-admin-details-comments.actions';
import { selectParams, selectPeriod, selectSlug } from './contest-admin-details-comments.selectors';

@Injectable()
export class ContestAdminDetailsCommentsEffects {

  updateParams = createEffect(() => this.actions.pipe(
    ofType(
      ContestAdminDetailsCommentsActions.updateParams,
      ContestAdminDetailsCommentsActions.commentDeleted,
    ),
    withLatestFrom(
      this.store.select(selectPeriod),
      this.store.select(selectSlug),
      this.store.select(selectParams)),
    switchMap(([, period, slug, params]) => this.getContestCommentsService.watch({
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
                        path: 'contest.slug',
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
    map(response => ContestAdminDetailsCommentsActions.setComments(response.data.getContestComments as PageableList_ContestCommentEntity))
  ));

  deleteComment = createEffect(() => this.actions.pipe(
    ofType(ContestAdminDetailsCommentsActions.deleteComment),
    switchMap(action => this.confirmService
      .confirm({ type: ConfirmType.Delete, context: action.comment?.content }).pipe(
        switchMap(confirmed => confirmed
          ? of(action.comment)
          : EMPTY
        )
      )
    ),
    switchMap(contest => this.deleteContestCommentService.mutate({
      id: contest?.id
    })),
    map(() => ContestAdminDetailsCommentsActions.commentDeleted())
  ));

  contestDeleted = createEffect(() => this.actions.pipe(
    ofType(ContestAdminDetailsCommentsActions.commentDeleted),
    map(() => CoreActions.setFeedback({
      type: FeedbackType.Success,
      labelMessage: 'deletedSuccessfully'
    }))
  ));

  constructor(
    private actions: Actions,
    private confirmService: ConfirmService,
    private deleteContestCommentService: DeleteContestCommentGQL,
    private getContestCommentsService: GetContestCommentsGQL,
    private store: Store,
  ) { }
}
