import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { EMPTY, map, of, switchMap, tap, withLatestFrom } from 'rxjs';
import { DeletePrivilegeApplicationGQL } from 'src/app/admin/api/generated/delete-privilege-application.mutation.generated';
import { GetPrivilegeApplicationsGQL } from 'src/app/admin/api/generated/get-privilege-application.query.generated';

import { Router } from '@angular/router';
import { AddUserRoleGQL } from 'src/app/admin/api/generated/add-user-role.mutation.generated';
import { GetRolesGQL } from 'src/app/admin/api/generated/get-roles.query.generated';
import { PageableList_PrivilegeApplicationEntity, QueryOperator, RoleEntity } from 'src/app/core/api/generated/schema';
import { adminUrl } from 'src/app/core/constants/module.constants';
import { CoreActions } from 'src/app/core/state/actions/core.actions';
import { FeedbackType } from 'src/app/core/typings/feedback';
import { ConfirmDeleteComponent } from 'src/app/shared/dialogs/confirm-delete/confirm-delete.component';
import { accessBaseRoute } from '../../admin-settings-access-routing.module';
import { AdminSettingsPrivilegeApplicationActions } from './admin-settings-privilege-application.actions';
import { selectParams } from './admin-settings-privilege-application.selectors';



@Injectable()
export class AdminSettingsPrivilegeApplicationEffects {

  updateParams = createEffect(() => this.actions.pipe(
    ofType(
      AdminSettingsPrivilegeApplicationActions.updateParams,
      AdminSettingsPrivilegeApplicationActions.userApplicationDeleted,
      AdminSettingsPrivilegeApplicationActions.saved,
    ),
    withLatestFrom(this.store.select(selectParams)),
    switchMap(([, params]) => this.getPrivilegeApplicationsService.watch({ 
      params:{
        ...params,
        expression:{
          entity:{
            path: 'accepted',
            operator: QueryOperator.Equal,
            value: 'false'
          }
        }
      }
    }).valueChanges),
    map(response => AdminSettingsPrivilegeApplicationActions.setOverviewData(response.data.getPrivilegeApplications as PageableList_PrivilegeApplicationEntity))
  ));

  deleteUserApplication = createEffect(() => this.actions.pipe(
    ofType(AdminSettingsPrivilegeApplicationActions.deleteUserApplication),
    switchMap(action => {
      const fullName = `${action.user?.user?.firstName} ${action.user?.user?.lastName}`;
      return this.dialog.open(ConfirmDeleteComponent, { data: fullName })
        .afterClosed().pipe(
          switchMap(confirmed => confirmed ? of(action.user) : EMPTY)
        );
    }),
    switchMap(user => this.deleteUserApplicationService.mutate({
      id: user?.id
    })),
    map(() => AdminSettingsPrivilegeApplicationActions.userApplicationDeleted())
  ));

  userApplicationDeleted = createEffect(() => this.actions.pipe(
    ofType(AdminSettingsPrivilegeApplicationActions.userApplicationDeleted),
    map(() => CoreActions.setFeedback({
      type: FeedbackType.Success,
      labelMessage: 'deletedSuccessfully'
    }))
  ));

  getUserRole = createEffect(() => this.actions.pipe(
    ofType(AdminSettingsPrivilegeApplicationActions.getUserRole),
    switchMap(action => this.getRolesService.watch({
      params: {
        expression: {
          entity: {
            path: 'privileges.id',
            operator: QueryOperator.Equal,
            value: action.rolePrivilegeId
          }
        }
      }
    }).valueChanges.pipe(
      map(response => AdminSettingsPrivilegeApplicationActions.rolesRetrieved(response.data.getRoles?.result as RoleEntity[]))
    ))
  ));

  save = createEffect(() => this.actions.pipe(
    ofType(AdminSettingsPrivilegeApplicationActions.save),
    switchMap(entity => this.addUserRoleService.mutate({
      roleId: entity?.role?.id,  
      userId: entity?.user?.id,
      privilegeApplicationId: entity?.privilegeApplication?.id,
    })),
    map(() => AdminSettingsPrivilegeApplicationActions.saved())
  ))

  saved = createEffect(() => this.actions.pipe(
    ofType(AdminSettingsPrivilegeApplicationActions.saved),
    tap(() => this.router.navigate([adminUrl, accessBaseRoute, 'privilege-applications'])),
    map(() => CoreActions.setFeedback({
      type: FeedbackType.Success,
      labelMessage: 'savedSuccessfully'
    }))
  ));

  constructor(
    private actions: Actions,
    private addUserRoleService: AddUserRoleGQL,
    private dialog: MatDialog,
    private deleteUserApplicationService: DeletePrivilegeApplicationGQL,
    private getPrivilegeApplicationsService: GetPrivilegeApplicationsGQL,
    private getRolesService: GetRolesGQL,
    private router: Router,
    private store: Store,
  ) {}
}
