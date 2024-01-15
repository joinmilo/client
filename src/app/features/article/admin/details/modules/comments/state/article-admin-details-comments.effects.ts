import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { EMPTY, map, of, switchMap, withLatestFrom } from 'rxjs';
import { ConjunctionOperator, PageableList_ArticleCommentEntity, QueryOperator } from 'src/app/core/api/generated/schema';
import { CoreActions } from 'src/app/core/state/actions/core.actions';
import { FeedbackType } from 'src/app/core/typings/feedback';
import { DeleteArticleCommentGQL } from 'src/app/features/article/api/generated/delete-article-comment.mutation.generated';
import { GetArticleCommentsGQL } from 'src/app/features/article/api/generated/get-article-comments.query.generated';
import { ConfirmService } from 'src/app/shared/confirm/service/confirm.service';
import { ConfirmType } from 'src/app/shared/confirm/typings/confirm';
import { ArticleAdminDetailsCommentsActions } from './article-admin-details-comments.actions';
import { selectParams, selectPeriod, selectSlug } from './article-admin-details-comments.selectors';

@Injectable()
export class ArticleAdminDetailsCommentsEffects {

  updateParams = createEffect(() => this.actions.pipe(
    ofType(
      ArticleAdminDetailsCommentsActions.updateParams,
      ArticleAdminDetailsCommentsActions.commentDeleted,
    ),
    withLatestFrom(
      this.store.select(selectPeriod),
      this.store.select(selectSlug),
      this.store.select(selectParams)),
    switchMap(([, period, slug, params]) => this.getArticleCommentsService.watch({
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
                        path: 'article.slug',
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
    map(response => ArticleAdminDetailsCommentsActions.setComments(response.data.getArticleComments as PageableList_ArticleCommentEntity))
  ));


  deleteComment = createEffect(() => this.actions.pipe(
    ofType(ArticleAdminDetailsCommentsActions.deleteComment),
    switchMap(action => this.confirmService
      .confirm({ type: ConfirmType.Delete, context: action.comment?.content }).pipe(
        switchMap(confirmed => confirmed
          ? of(action.comment)
          : EMPTY
        )
      )
    ),
    switchMap(article => this.deleteArticleCommentService.mutate({
      id: article?.id
    })),
    map(() => ArticleAdminDetailsCommentsActions.commentDeleted())
  ));

  articleDeleted = createEffect(() => this.actions.pipe(
    ofType(ArticleAdminDetailsCommentsActions.commentDeleted),
    map(() => CoreActions.setFeedback({
      type: FeedbackType.Success,
      labelMessage: 'deletedSuccessfully'
    }))
  ));

  constructor(
    private actions: Actions,
    private confirmService: ConfirmService,
    private deleteArticleCommentService: DeleteArticleCommentGQL,
    private getArticleCommentsService: GetArticleCommentsGQL,
    private store: Store,
  ) { }
}
