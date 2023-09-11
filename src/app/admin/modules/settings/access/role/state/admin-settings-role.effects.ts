import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { EMPTY, map, of, switchMap, withLatestFrom } from 'rxjs';
import { DeleteRoleGQL } from 'src/app/admin/api/generated/delete-role.mutation.generated';
import { GetRolesGQL } from 'src/app/admin/api/generated/get-roles.query.generated';
import { PageableList_RoleEntity } from 'src/app/core/api/generated/schema';
import { CoreActions } from 'src/app/core/state/actions/core.actions';
import { FeedbackType } from 'src/app/core/typings/feedback';
import { ConfirmDeleteComponent } from 'src/app/shared/dialogs/confirm-delete/confirm-delete.component';
import { AdminSettingsRoleActions } from './admin-settings-role.actions';
import { selectParams } from './admin-settings-role.selectors';

@Injectable()
export class AdminSettingsRoleEffects {

  updateParams = createEffect(() => this.actions.pipe(
    ofType(
      AdminSettingsRoleActions.updateParams,
      AdminSettingsRoleActions.roleDeleted
      ),
    withLatestFrom(this.store.select(selectParams)),
    switchMap(([, params]) => this.getRoleesService.watch({
      params,
    }).valueChanges),
    map(response => AdminSettingsRoleActions.setOverviewData(response.data.getRoles as PageableList_RoleEntity))
  ));

  deleteRole = createEffect(() => this.actions.pipe(
    ofType(AdminSettingsRoleActions.deleteRole),
    switchMap(action => this.dialog.open(ConfirmDeleteComponent, { data: action.role?.name })
      .afterClosed().pipe(
        switchMap(confirmed => confirmed
          ? of(action.role)
          : EMPTY
        )
      )
    ),
    switchMap(role => this.deleteRoleService.mutate({
      id: role?.id
    })),
    map(() => AdminSettingsRoleActions.roleDeleted())
  ));

  roleDeleted = createEffect(() => this.actions.pipe(
    ofType(AdminSettingsRoleActions.roleDeleted),
    map(() => CoreActions.setFeedback({
      type: FeedbackType.Success,
      labelMessage: 'deletedSuccessfully'
    }))
  ));

  constructor(
    private actions: Actions,
    private dialog: MatDialog,
    private deleteRoleService: DeleteRoleGQL,
    private getRoleesService: GetRolesGQL,
    private store: Store,
  ) {}
}
