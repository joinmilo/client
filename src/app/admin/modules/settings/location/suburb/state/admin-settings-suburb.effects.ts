import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { EMPTY, map, of, switchMap, tap, withLatestFrom } from 'rxjs';
import { DeleteSuburbGQL } from 'src/app/admin/api/generated/delete-suburb.mutation.generated';
import { GetSuburbGQL } from 'src/app/admin/api/generated/get-suburb.query.generated';
import { GetSuburbsGQL } from 'src/app/admin/api/generated/get-suburbs.query.generated';
import { SaveSuburbGQL } from 'src/app/admin/api/generated/save-suburb.mutation.generated';
import { PageableList_SuburbEntity } from 'src/app/core/api/generated/schema';
import { adminUrl, settingsUrl } from 'src/app/core/constants/module.constants';
import { CoreActions } from 'src/app/core/state/actions/core.actions';
import { FeedbackType } from 'src/app/core/typings/feedback';
import { ConfirmDeleteComponent } from 'src/app/shared/dialogs/confirm-delete/confirm-delete.component';
import { baseRoute } from '../../admin-settings-location.routing.module';
import { AdminSettingsSuburbActions } from './admin-settings-suburb.actions';
import { selectParams } from './admin-settings-suburb.selectors';


@Injectable()
export class AdminSettingsSuburbEffects {

  updateParams = createEffect(() => this.actions.pipe(
    ofType(
      AdminSettingsSuburbActions.updateParams,
      AdminSettingsSuburbActions.deleted
      ),
    withLatestFrom(this.store.select(selectParams)),
    switchMap(([, params]) => this.getSuburbsService.watch({
      params,
    }).valueChanges),
    map(response => AdminSettingsSuburbActions.setOverviewData(response.data.getSuburbs as PageableList_SuburbEntity))
  ));

  getSuburb = createEffect(() => this.actions.pipe(
    ofType(AdminSettingsSuburbActions.getSuburb),
    switchMap(action => this.getSuburbService.watch({
      entity: { id: action.entityId }
    }).valueChanges),
    map(response => AdminSettingsSuburbActions.suburbRetrieved(response.data.getSuburb))
  ));

  cancelled = createEffect(() => this.actions.pipe(
    ofType(AdminSettingsSuburbActions.cancelled),
    tap(() => this.router.navigate([adminUrl, settingsUrl, baseRoute, 'suburbs'])),
  ), { dispatch: false });
  

  save = createEffect(() => this.actions.pipe(
    ofType(AdminSettingsSuburbActions.save),
    switchMap(action => this.saveSuburbService.mutate({
      entity: action.suburb
    })),
    map(() => AdminSettingsSuburbActions.saved())
  ));

  saved = createEffect(() => this.actions.pipe(
    ofType(AdminSettingsSuburbActions.saved),
    tap(() => this.router.navigate([adminUrl, settingsUrl, baseRoute, 'suburbs'])),
    map(() => CoreActions.setFeedback({
      type: FeedbackType.Success,
      labelMessage: 'savedSuccessfully'
    }))
  ));

  delete = createEffect(() => this.actions.pipe(
    ofType(AdminSettingsSuburbActions.delete),
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
    map(() => AdminSettingsSuburbActions.deleted())
  ));

  deleted = createEffect(() => this.actions.pipe(
    ofType(AdminSettingsSuburbActions.deleted),
    map(() => CoreActions.setFeedback({
      type: FeedbackType.Success,
      labelMessage: 'deletedSuccessfully'
    }))
  ));

  constructor(
    private actions: Actions,
    private dialog: MatDialog,
    private deleteSuburbService: DeleteSuburbGQL,
    private getSuburbsService: GetSuburbsGQL,
    private getSuburbService: GetSuburbGQL,
    private saveSuburbService: SaveSuburbGQL,
    private store: Store,
    private router: Router,
  ) {}
}
