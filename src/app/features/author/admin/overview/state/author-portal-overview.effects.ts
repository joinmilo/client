import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { EMPTY, map, of, switchMap, withLatestFrom } from 'rxjs';
import { PageableList_UserContextEntity } from 'src/app/core/api/generated/schema';
import { CoreActions } from 'src/app/core/state/actions/core.actions';
import { FeedbackType } from 'src/app/core/typings/feedback';
import { ConfirmDeleteComponent } from 'src/app/shared/dialogs/confirm-delete/confirm-delete.component';
import { DeleteUserContextGQL } from '../../../api/generated/delete-author.mutation.generated';
import { GetUserContextsGQL } from '../../../api/generated/get-authors.query.generated';
import { AuthorAdminOverviewActions } from './author-admin-overview.actions';
import { selectParams } from './author-portal-overview.selectors';

@Injectable()
export class AuthorAdminOverviewEffects {

  updateParams = createEffect(() => this.actions.pipe(
    ofType(
      AuthorAdminOverviewActions.updateParams,
      AuthorAdminOverviewActions.authorDeleted,
      ),
    withLatestFrom(this.store.select(selectParams)),
    switchMap(([, params]) => this.getAuthorsService.watch({
      params,
    }).valueChanges),
    map(response => AuthorAdminOverviewActions.setOverviewData(response.data.getUserContexts as PageableList_UserContextEntity))
  ));

  deleteAuthor = createEffect(() => this.actions.pipe(
    ofType(AuthorAdminOverviewActions.deleteAuthor),
    switchMap(action => this.dialog.open(ConfirmDeleteComponent, { data: action.author?.user?.lastName })
      .afterClosed().pipe(
        switchMap(confirmed => confirmed
          ? of(action.author)
          : EMPTY
        )
      )
    ),
    switchMap(Author => this.deleteAuthorService.mutate({
      id: Author?.id
    })),
    map(() => AuthorAdminOverviewActions.authorDeleted())
  ));

  AuthorDeleted = createEffect(() => this.actions.pipe(
    ofType(AuthorAdminOverviewActions.authorDeleted),
    map(() => CoreActions.setFeedback({
      type: FeedbackType.Success,
      labelMessage: 'deletedSuccessfully'
    }))
  ));
  
  constructor(
    private actions: Actions,
    private dialog: MatDialog,
    private getAuthorsService: GetUserContextsGQL,
    private deleteAuthorService: DeleteUserContextGQL,
    private store: Store,
  ) {}
}
