import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { EMPTY, map, of, switchMap, withLatestFrom } from 'rxjs';
import { DeletePageGQL } from 'src/app/admin/api/generated/delete-page.mutation.generated';
import { GetPagesGQL } from 'src/app/admin/api/generated/get-pages.query.generated';
import { PageableList_PageEntity } from 'src/app/core/api/generated/schema';
import { CoreActions } from 'src/app/core/state/actions/core.actions';
import { FeedbackType } from 'src/app/core/typings/feedback';
import { ConfirmDeleteComponent } from 'src/app/shared/dialogs/confirm-delete/confirm-delete.component';
import { AdminSettingsPageActions } from './admin-settings-pages.actions';
import { selectParams } from './admin-settings-pages.selectors';

@Injectable()
export class AdminSettingsPageEffects {

  updateParams = createEffect(() => this.actions.pipe(
    ofType(
      AdminSettingsPageActions.updateParams,
      AdminSettingsPageActions.pageDeleted
      ),
    withLatestFrom(this.store.select(selectParams)),
    switchMap(([, params]) => this.getPagesService.watch({
      params,
    }).valueChanges),
    map(response => AdminSettingsPageActions.setOverviewData(response.data.getPages as PageableList_PageEntity))
  ));

  deletePage = createEffect(() => this.actions.pipe(
    ofType(AdminSettingsPageActions.deletePage),
    switchMap(action => this.dialog.open(ConfirmDeleteComponent, { data: action.page?.name})
      .afterClosed().pipe(
        switchMap(confirmed => confirmed
          ? of(action.page)
          : EMPTY
        )
      )
    ),
    switchMap(page => this.deletePageService.mutate({
      id: page?.id
    })),
    map(() => AdminSettingsPageActions.pageDeleted())
  ));

  pageDeleted = createEffect(() => this.actions.pipe(
    ofType(AdminSettingsPageActions.pageDeleted),
    map(() => CoreActions.setFeedback({
      type: FeedbackType.Success,
      labelMessage: 'deletedSuccessfully'
    }))
  ));

  constructor(
    private actions: Actions,
    private dialog: MatDialog,
    private deletePageService: DeletePageGQL,
    private getPagesService: GetPagesGQL,
    private store: Store,
  ) {}
}
