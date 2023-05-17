import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { filter, map, switchMap, tap } from 'rxjs';
import { FeedbackType } from 'src/app/core/typings/feedback';
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
    tap(() => this.router.navigate(['/user', 'login'])),
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
      tap(() => this.router.navigate(['/user', 'login'])),
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

  constructor(
    private router: Router,
    private actions: Actions,
    private verifyUserService: VerifyUserGQL,
    private sendPasswordResetService: SendPasswordResetGQL,
    private resetPasswordService: ResetPasswordGQL,
    private saveUserService: SaveUserGQL) { }
}
