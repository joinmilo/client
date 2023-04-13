import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs';
import { VerifyUserGQL } from '../../../../schema/schema';
import { UserActions } from './user.actions';

@Injectable()
export class UserEffects {

  verifyUser = createEffect(() => this.actions.pipe(
    ofType(UserActions.verifyUser),
    switchMap((action) => this.verifyUserService.mutate({
      token: action.token
    })),
    map(response => UserActions.userVerified(response.data?.verify?.verified))
  ));

  constructor(
    private actions: Actions,
    private verifyUserService: VerifyUserGQL) { }
}
