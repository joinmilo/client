import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { EMPTY, map, of, switchMap, withLatestFrom } from 'rxjs';
import { PageableList_ArticlePublicAuthorEntity } from 'src/app/core/api/generated/schema';
import { CoreActions } from 'src/app/core/state/actions/core.actions';
import { FeedbackType } from 'src/app/core/typings/feedback';
import { ConfirmDialogService } from 'src/app/shared/confirmDialog/dialog-confirm.service';
import { ConfirmDialogType } from 'src/app/shared/confirmDialog/typings/confirm-dialog';
import { DeleteArticlePublicAuthorGQL } from '../../../api/generated/delete-article-public-author.mutation.generated';
import { GetArticlePublicAuthorsGQL } from '../../../api/generated/get-public-authors.query.generated';
import { GuestArticleAdminPublicAuthorsActions } from './guest-article-admin-authors.actions';
import { selectParams } from './guest-article-admin-authors.selectors';

@Injectable()
export class GuestArticleAdminPublicAuthorsEffects {

  updateParams = createEffect(() => this.actions.pipe(
    ofType(
      GuestArticleAdminPublicAuthorsActions.updateParams,
      GuestArticleAdminPublicAuthorsActions.authorDeleted,
    ),
    withLatestFrom(this.store.select(selectParams)),
    switchMap(([, params]) => this.getPublicAuthorsService.watch({ 
      params
    }).valueChanges),
    map(response => GuestArticleAdminPublicAuthorsActions.setOverviewData(response.data.getArticlePublicAuthors as PageableList_ArticlePublicAuthorEntity))
  ));

  deleteGuestArticle = createEffect(() => this.actions.pipe(
    ofType(GuestArticleAdminPublicAuthorsActions.deleteAuthor),
    switchMap(action => this.confirmDialogService
      .confirm({ type: ConfirmDialogType.Delete, context: action.article?.name }).pipe(
        switchMap(confirmed => confirmed
          ? of(action.article)
          : EMPTY
        )
      )
    ),
    switchMap(article => this.deleteGuestArticleService.mutate({
      id: article?.id
    })),
    map(() => GuestArticleAdminPublicAuthorsActions.authorDeleted())
  ));

  articleDeleted = createEffect(() => this.actions.pipe(
    ofType(GuestArticleAdminPublicAuthorsActions.authorDeleted),
    map(() => CoreActions.setFeedback({
      type: FeedbackType.Success,
      labelMessage: 'deletedSuccessfully'
    }))
  ));

  constructor(
    private actions: Actions,
    private dialog: MatDialog,
    private deleteGuestArticleService: DeleteArticlePublicAuthorGQL,
    private getPublicAuthorsService: GetArticlePublicAuthorsGQL,
    private store: Store,
    private confirmDialogService: ConfirmDialogService
  ) {}
}
