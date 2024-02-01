import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { ConfirmService, ConfirmType } from 'ngx-cinlib/modals/confirm';
import { FeedbackType } from 'ngx-cinlib/modals/feedback';
import { EMPTY, map, of, switchMap, withLatestFrom } from 'rxjs';
import { DeleteUserGQL } from 'src/app/admin/api/generated/delete-user.mutation.generated';
import { GetUsersGQL } from 'src/app/admin/api/generated/get-users.query.generated';
import { PageableList_UserEntity } from 'src/app/core/api/generated/schema';
import { CoreActions } from 'src/app/core/state/actions/core.actions';
import { AdminSettingsUserActions } from './admin-settings-user.actions';
import { selectParams } from './admin-settings-user.selectors';

@Injectable()
export class AdminSettingsUserEffects {

  updateParams = createEffect(() => this.actions.pipe(
    ofType(
      AdminSettingsUserActions.updateParams,
      AdminSettingsUserActions.userDeleted,
    ),
    withLatestFrom(this.store.select(selectParams)),
    switchMap(([, params]) => this.getUseresService.watch({
      params,
    }).valueChanges),
    map(response => AdminSettingsUserActions.setOverviewData(response.data.getUsers as PageableList_UserEntity))
  ));

  deleteUser = createEffect(() => this.actions.pipe(
    ofType(AdminSettingsUserActions.deleteUser),
    switchMap(action => this.confirmService
      .confirm({ type: ConfirmType.Delete, context: action.user?.firstName + ' ' + action.user?.lastName }).pipe(
        switchMap(confirmed => confirmed
          ? of(action.user)
          : EMPTY
        )
      )
    ),
    switchMap(user => this.deleteUserService.mutate({
      id: user?.id
    })),
    map(() => AdminSettingsUserActions.userDeleted())
  ));

  userDeleted = createEffect(() => this.actions.pipe(
    ofType(AdminSettingsUserActions.userDeleted),
    map(() => CoreActions.setFeedback({
      type: FeedbackType.Success,
      labelMessage: 'deletedSuccessfully'
    }))
  ));

  constructor(
    private actions: Actions,
    private confirmService: ConfirmService,
    private deleteUserService: DeleteUserGQL,
    private getUseresService: GetUsersGQL,
    private store: Store,
  ) {}
}
