import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { filter, map, switchMap, tap } from 'rxjs';
import { FeedbackType } from 'src/app/core/typings/feedback';
import { LoginGQL, Maybe } from 'src/schema/schema';
import { UserEntity, VerifyUserGQL } from '../../../schema/schema';
import { ResetPasswordGQL, SaveUserGQL, SendPasswordResetGQL } from './../../../schema/schema';
import { CoreActions } from './../../core/state/core.actions';
import { UserActions } from './user.actions';

@Injectable()
export class UserEffects {

  register = createEffect(() => this.actions.pipe(
    ofType(UserActions.register),
    switchMap((action) => this.saveUserService.mutate({
      entity: action.entity
    })),
    map(response => UserActions.registered(response.data?.saveUser as UserEntity))
  ));

  registered = createEffect(() => this.actions.pipe(
    ofType(UserActions.registered),
    tap(() => this.router.navigate(['login'])),
    map(() => CoreActions.setFeedback({
      type: FeedbackType.Success,
      labelMessage: 'registrationReceived'
    }))
  ));

  verify = createEffect(() => this.actions.pipe(
    ofType(UserActions.verify),
    switchMap((action) => this.verifyUserService.mutate({
      token: action.token
    })),
    map(response => UserActions.verified(response.data?.verify?.verified))
  ));

  sendPasswordReset = createEffect(() =>
    this.actions.pipe(
      ofType(UserActions.sendPasswordReset),
      switchMap((action) =>
        this.sendPasswordResetService.mutate({
          email: action.email
        })
      ),
      filter(response => !!response.data?.sendPasswordReset),
      map(() => CoreActions.setFeedback({
        type: FeedbackType.Success,
        labelMessage: 'passwordResetSend'
      }))
    )
  );

  resetPassword = createEffect(() =>
    this.actions.pipe(
      ofType(UserActions.resetPassword),
      switchMap((action) =>
        this.resetPasswordService.mutate({
          token: action.token,
          password: action.password,
        })
      ),
      filter(response => !!response.data?.resetPassword),
      map(() => CoreActions.setFeedback({
        type: FeedbackType.Success,
        labelMessage: 'resetPasswordSuccess'
      }))
    ));

  login = createEffect(() => this.actions.pipe(
    ofType(UserActions.login),
    filter(action => !!action.email && !!action.password),
    switchMap((action) => this.createTokenService.mutate({
      email: action.email,
      password: action.password
    })),
    filter(response => !!response.data?.createToken?.access),
    map(response => UserActions.loggedIn(response.data?.createToken?.access as Maybe<string>))
  ));

  loggedIn = createEffect(() => this.actions.pipe(
    ofType(UserActions.loggedIn),
    tap(() => this.router.navigate([''])),
    map(() => CoreActions.setFeedback({
      type: FeedbackType.Success,
      labelMessage: 'youreLoggedIn'
    }))
  ));

  constructor(
    private router: Router,
    private actions: Actions,
    private verifyUserService: VerifyUserGQL,
    private sendPasswordResetService: SendPasswordResetGQL,
    private resetPasswordService: ResetPasswordGQL,
    private saveUserService: SaveUserGQL,
    private createTokenService: LoginGQL) { }
}
