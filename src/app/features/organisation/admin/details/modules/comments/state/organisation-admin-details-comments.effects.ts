import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { FeedbackType } from 'ngx-cinlib/modals/feedback';
import { EMPTY, map, of, switchMap, withLatestFrom } from 'rxjs';
import { ConjunctionOperator, PageableList_OrganisationCommentEntity, QueryOperator } from 'src/app/core/api/generated/schema';
import { CoreActions } from 'src/app/core/state/actions/core.actions';
import { DeleteOrganisationCommentGQL } from 'src/app/features/organisation/api/generated/delete-organisation-comment.mutation.generated';
import { GetOrganisationCommentsGQL } from 'src/app/features/organisation/api/generated/get-organisation-comments.query.generated';
import { ConfirmService } from 'src/app/shared/confirm/service/confirm.service';
import { ConfirmType } from 'src/app/shared/confirm/typings/confirm';
import { OrganisationAdminDetailsCommentsActions } from './organisation-admin-details-comments.actions';
import { selectParams, selectPeriod, selectSlug } from './organisation-admin-details-comments.selectors';

@Injectable()
export class OrganisationAdminDetailsCommentsEffects {

  updateParams = createEffect(() => this.actions.pipe(
    ofType(
      OrganisationAdminDetailsCommentsActions.updateParams,
      OrganisationAdminDetailsCommentsActions.commentDeleted,
    ),
    withLatestFrom(
      this.store.select(selectPeriod),
      this.store.select(selectSlug),
      this.store.select(selectParams)),
    switchMap(([, period, slug, params]) => this.getOrganisationCommentsService.watch({
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
                        path: 'organisation.slug',
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
    map(response => OrganisationAdminDetailsCommentsActions.setComments(response.data.getOrganisationComments as PageableList_OrganisationCommentEntity))
  ));

  deleteComment = createEffect(() => this.actions.pipe(
    ofType(OrganisationAdminDetailsCommentsActions.deleteComment),
    switchMap(action => this.confirmDialogService
      .confirm({ type: ConfirmType.Delete, context: action.comment?.content }).pipe(
        switchMap(confirmed => confirmed
          ? of(action.comment)
          : EMPTY
        )
      )
    ),
    switchMap(organisation => this.deleteOrganisationCommentService.mutate({
      id: organisation?.id
    })),
    map(() => OrganisationAdminDetailsCommentsActions.commentDeleted())
  ));

  organisationDeleted = createEffect(() => this.actions.pipe(
    ofType(OrganisationAdminDetailsCommentsActions.commentDeleted),
    map(() => CoreActions.setFeedback({
      type: FeedbackType.Success,
      labelMessage: 'deletedSuccessfully'
    }))
  ));

  constructor(
    private actions: Actions,
    private confirmDialogService: ConfirmService,
    private deleteOrganisationCommentService: DeleteOrganisationCommentGQL,
    private getOrganisationCommentsService: GetOrganisationCommentsGQL,
    private store: Store,
  ) { }
}
