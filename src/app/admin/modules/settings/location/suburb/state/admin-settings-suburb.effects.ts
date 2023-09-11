import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { EMPTY, map, of, switchMap, withLatestFrom } from 'rxjs';
import { DeleteSuburbGQL } from 'src/app/admin/api/generated/delete-suburb.mutation.generated';
import { GetSuburbsGQL } from 'src/app/admin/api/generated/get-suburbs.query.generated';
import { PageableList_SuburbEntity } from 'src/app/core/api/generated/schema';
import { CoreActions } from 'src/app/core/state/actions/core.actions';
import { FeedbackType } from 'src/app/core/typings/feedback';
import { ConfirmDeleteComponent } from 'src/app/shared/dialogs/confirm-delete/confirm-delete.component';
import { AdminSettingsSuburbActions } from './admin-settings-suburb.actions';
import { selectParams } from './admin-settings-suburb.selectors';


@Injectable()
export class AdminSettingsSuburbEffects {

  updateParams = createEffect(() => this.actions.pipe(
    ofType(
      AdminSettingsSuburbActions.updateParams,
      AdminSettingsSuburbActions.suburbDeleted
      ),
    withLatestFrom(this.store.select(selectParams)),
    switchMap(([, params]) => this.getSuburbesService.watch({
      params,
    }).valueChanges),
    map(response => AdminSettingsSuburbActions.setOverviewData(response.data.getSuburbs as PageableList_SuburbEntity))
  ));

  deleteSuburb = createEffect(() => this.actions.pipe(
    ofType(AdminSettingsSuburbActions.deleteSuburb),
    switchMap(action => this.dialog.open(ConfirmDeleteComponent, { data: action.suburb?.name })
      .afterClosed().pipe(
        switchMap(confirmed => confirmed
          ? of(action.suburb)
          : EMPTY
        )
      )
    ),
    switchMap(suburb => this.deleteSuburbService.mutate({
      id: suburb?.id
    })),
    map(() => AdminSettingsSuburbActions.suburbDeleted())
  ));

  suburbDeleted = createEffect(() => this.actions.pipe(
    ofType(AdminSettingsSuburbActions.suburbDeleted),
    map(() => CoreActions.setFeedback({
      type: FeedbackType.Success,
      labelMessage: 'deletedSuccessfully'
    }))
  ));

  constructor(
    private actions: Actions,
    private dialog: MatDialog,
    private deleteSuburbService: DeleteSuburbGQL,
    private getSuburbesService: GetSuburbsGQL,
    private store: Store,
  ) {}
}
