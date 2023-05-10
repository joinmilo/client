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

  saveUser = createEffect(() => this.actions.pipe(
    ofType(UserActions.saveUser),
    switchMap((action) => this.saveUserService.mutate({
      entity: action.entity
    })),
    map(response => UserActions.userSaved(response.data?.saveUser as UserEntity))
  ));

  userSaved = createEffect(() => this.actions.pipe(
    ofType(UserActions.userSaved),
    tap(() => {
      this.router.navigateByUrl('/user/login')
    }),
    map(() => CoreActions.setFeedback({
      type: FeedbackType.Success,
      labelMessage: 'registrationReceived'
    }))
  ));

  verifyUser = createEffect(() => this.actions.pipe(
    ofType(UserActions.verifyUser),
    switchMap((action) => this.verifyUserService.mutate({
      token: action.token
    })),
    map(response => UserActions.userVerified(response.data?.verify?.verified))
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

  userLogin = createEffect(() => this.actions.pipe(
    ofType(UserActions.userLogin),
    filter(action => !!action.email && !!action.password),
    switchMap((action) => this.loginService.mutate({
      email: action.email!,
      password: action.password!
    })),
    filter(response => !!response.data?.createToken?.access),
    map(response => UserActions.userLoggedIn(response.data?.createToken?.access as Maybe<string>))
  ));

  userLoggedIn = createEffect(() => this.actions.pipe(
    ofType(UserActions.userLoggedIn),
    tap(() => {
      this.router.navigateByUrl('/portal/landing')
    })
  ), { dispatch: false });

  constructor(
    private router: Router,
    private actions: Actions,
    private verifyUserService: VerifyUserGQL,
    private sendPasswordResetService: SendPasswordResetGQL,
    private resetPasswordService: ResetPasswordGQL,
    private saveUserService: SaveUserGQL,
    private loginService: LoginGQL) { }
}
