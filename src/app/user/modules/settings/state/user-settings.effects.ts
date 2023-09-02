import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map, switchMap, tap, withLatestFrom } from 'rxjs';
import { SuburbEntity, UserContextEntity, UserDeletionTypeEntity } from 'src/app/core/api/generated/schema';
import { CoreActions } from 'src/app/core/state/actions/core.actions';
import { FeedbackType } from 'src/app/core/typings/feedback';
import { DeleteMeGQL } from 'src/app/user/api/generated/delete-user-entity.mutation.generated';
import { GetSuburbsGQL } from 'src/app/user/api/generated/get-suburbs.query.generated';
import { GetUserDeletionTypesGQL } from 'src/app/user/api/generated/get-user-deletion-types.query.generated';
import { SaveUserContextGQL } from 'src/app/user/api/generated/save-user-context.mutation.generated';
import { UserSettingsActions } from './user-settings.actions';
import { selectUserDeletionDescription, selectUserDeletionTypes } from './user-settings.selectors';

@Injectable()
export class UserSettingsEffects {

  savePersonalData = createEffect(() => this.actions.pipe(
    ofType(UserSettingsActions.savePersonalData),
    switchMap((action) => this.saveUserContextService.mutate({
      entity: action.entity
    })),
    map(response => UserSettingsActions.personalDataSaved(response.data?.saveUserContext as UserContextEntity))
  ));

  getUserDeletionTypes = createEffect(() => this.actions.pipe(
    ofType(UserSettingsActions.getUserDeletionTypes),
    switchMap(() => this.getUserDeletionTypesService.watch().valueChanges),
    map(response => UserSettingsActions.setUserDeletionTypes(response?.data?.getUserDeletionTypes?.result as UserDeletionTypeEntity[]))
  ))

  deleteUser = createEffect(() => this.actions.pipe(
    ofType(UserSettingsActions.deleteUser),
    withLatestFrom(
      this.store.select(selectUserDeletionDescription),
      this.store.select(selectUserDeletionTypes),),
    switchMap(([action, description, types]) => this.deleteUserEntityService.mutate({
     password: action.password,
     userDeletion: {
      content: description,
      types: types
     }
    })),
    map((response) => UserSettingsActions.userDeleted(response.data?.deleteMe))
  ));

  deletedUser = createEffect(() => this.actions.pipe(
    ofType(UserSettingsActions.deleteUser),
    tap(() => this.router.navigate(['/'])),
    map(() => CoreActions.setFeedback({
      type: FeedbackType.Success,
      labelMessage: 'dataSaved'
    }))
  ));

  getSuburbs = createEffect(() => this.actions.pipe(
    ofType(UserSettingsActions.getSuburbs),
    switchMap(() => this.getSuburbsService.watch().valueChanges),
    map(response => UserSettingsActions.setSuburbs(response.data.getSuburbs?.result as SuburbEntity[]))
  ));


  constructor(
    private actions: Actions,
    private router: Router,
    private store: Store,
    private getUserDeletionTypesService: GetUserDeletionTypesGQL,
    private saveUserContextService: SaveUserContextGQL,
    private deleteUserEntityService: DeleteMeGQL,
    private getSuburbsService: GetSuburbsGQL,
  ) { }
}