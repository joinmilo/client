import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { filter, map, switchMap } from 'rxjs';
import { FeedbackType } from 'src/app/core/typings/feedback';
import { VerifyUserGQL } from '../../../schema/schema';
import { CheckPasswordGQL, ResetPasswordGQL, SendPasswordResetGQL } from './../../../schema/schema';
import { CoreActions } from './../../core/state/core.actions';
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

  checkPassword = createEffect(() => this.actions.pipe(
    ofType(UserActions.checkPassword),
    switchMap((action) => this.checkPasswordService.mutate({
      password: action.password
    })),
    map(response => UserActions.setEntropy(response.data?.checkPassword))
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
)
);

  constructor(
    private actions: Actions,
    private verifyUserService: VerifyUserGQL,
    private checkPasswordService: CheckPasswordGQL,
    private sendPasswordResetService: SendPasswordResetGQL,
    private resetPasswordService: ResetPasswordGQL) { }
}
