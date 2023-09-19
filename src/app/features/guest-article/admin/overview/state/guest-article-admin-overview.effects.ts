import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { EMPTY, map, of, switchMap, withLatestFrom } from 'rxjs';
import { PageableList_ArticleEntity, QueryOperator } from 'src/app/core/api/generated/schema';
import { CoreActions } from 'src/app/core/state/actions/core.actions';
import { FeedbackType } from 'src/app/core/typings/feedback';
import { DeleteArticleGQL } from 'src/app/features/article/api/generated/delete-article.mutation.generated';
import { GetArticlesGQL } from 'src/app/features/article/api/generated/get-articles.query.generated';
import { ConfirmDeleteComponent } from 'src/app/shared/dialogs/confirm-delete/confirm-delete.component';
import { GuestArticleAdminOverviewActions } from './guest-article-admin-overview.actions';
import { selectParams } from './guest-article-admin-overview.selectors';

@Injectable()
export class GuestArticleAdminOverviewEffects {

  updateParams = createEffect(() => this.actions.pipe(
    ofType(
      GuestArticleAdminOverviewActions.updateParams,
      GuestArticleAdminOverviewActions.articleDeleted,
      GuestArticleAdminOverviewActions.articleSponsored,
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
    private deleteGuestArticleService: DeleteArticleGQL,
    private getGuestArticlesService: GetArticlesGQL,
    private store: Store,
  ) {}
}
