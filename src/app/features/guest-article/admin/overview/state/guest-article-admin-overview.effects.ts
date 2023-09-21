import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { EMPTY, map, of, switchMap, withLatestFrom } from 'rxjs';
import { PageableList_ArticleEntity, QueryOperator } from 'src/app/core/api/generated/schema';
import { CoreActions } from 'src/app/core/state/actions/core.actions';
import { FeedbackType } from 'src/app/core/typings/feedback';
import { DeleteArticleGQL } from 'src/app/features/article/api/generated/delete-article.mutation.generated';
import { ConfirmChangeComponent } from 'src/app/shared/dialogs/confirm-change/confirm-change.component';
import { ConfirmDeleteComponent } from 'src/app/shared/dialogs/confirm-delete/confirm-delete.component';
import { ChangeArticleApprovalGQL } from '../../../api/generated/change-article-approval.mutation.generated';
import { GetGuestArticlesGQL } from '../../../api/generated/get-guest-articles.query.generated';
import { GuestArticleAdminOverviewActions } from './guest-article-admin-overview.actions';
import { selectParams } from './guest-article-admin-overview.selectors';

@Injectable()
export class GuestArticleAdminOverviewEffects {

  updateParams = createEffect(() => this.actions.pipe(
    ofType(
      GuestArticleAdminOverviewActions.updateParams,
      GuestArticleAdminOverviewActions.articleDeleted,
      GuestArticleAdminOverviewActions.articleSponsored,
      GuestArticleAdminOverviewActions.approvalChanged,
    ),
    withLatestFrom(this.store.select(selectParams)),
    switchMap(([, params]) => this.getGuestArticlesService.watch({ 
      params:{
        ...params,
        expression:{
          entity:{
            path: 'author.id',
            operator: QueryOperator.Equal,
            value: null
          }
        }
      }
    }).valueChanges),
    map(response => GuestArticleAdminOverviewActions.setOverviewData(response.data.getArticles as PageableList_ArticleEntity))
  ));

  changeApproval = createEffect(() => this.actions.pipe(
    ofType(GuestArticleAdminOverviewActions.toggleArticleApproval),
    switchMap(action => this.dialog.open(ConfirmChangeComponent, { data:
        action.article?.approved
          ? 'thisWillUnpublishArticle'
          : 'thisWillApproveArticle'
      })
      .afterClosed().pipe(
        switchMap(confirmed => confirmed
          ? of(action.article)
          : EMPTY
        )
      )
    ),
    switchMap(article => this.changeArticleApprovalService.mutate({
      articleId: article?.id
    })),
    map(() => GuestArticleAdminOverviewActions.approvalChanged())
  ));

  approvalChanged = createEffect(() => this.actions.pipe(
    ofType(GuestArticleAdminOverviewActions.approvalChanged),
    map(() => CoreActions.setFeedback({
      type: FeedbackType.Success,
      labelMessage: 'changedSuccessfully'
    }))
  ));

  deleteGuestArticle = createEffect(() => this.actions.pipe(
    ofType(GuestArticleAdminOverviewActions.deleteArticle),
    switchMap(action => this.dialog.open(ConfirmDeleteComponent, { data: action.article?.name })
      .afterClosed().pipe(
        switchMap(confirmed => confirmed
          ? of(action.article)
          : EMPTY
        )
      )
    ),
    switchMap(article => this.deleteGuestArticleService.mutate({
      id: article?.id
    })),
    map(() => GuestArticleAdminOverviewActions.articleDeleted())
  ));

  articleDeleted = createEffect(() => this.actions.pipe(
    ofType(GuestArticleAdminOverviewActions.articleDeleted),
    map(() => CoreActions.setFeedback({
      type: FeedbackType.Success,
      labelMessage: 'deletedSuccessfully'
    }))
  ));

  constructor(
    private actions: Actions,
    private dialog: MatDialog,
    private changeArticleApprovalService: ChangeArticleApprovalGQL,
    private deleteGuestArticleService: DeleteArticleGQL,
    private getGuestArticlesService: GetGuestArticlesGQL,
    private store: Store,
  ) {}
}
