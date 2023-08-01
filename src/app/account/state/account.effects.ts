import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { filter, map, switchMap, tap } from 'rxjs';
import { accountUrl } from 'src/app/core/constants/core.constants';
import { FeedbackType } from 'src/app/core/typings/feedback';
import { ResetPasswordGQL, SaveUserGQL, SendPasswordResetGQL, SendVerificationGQL, UserContextEntity, UserEntity, VerifyUserGQL } from '../../../schema/schema';
import { CoreActions } from '../../core/state/actions/core.actions';
import { AccountActions } from './account.actions';

@Injectable()
export class AccountEffects {

  register = createEffect(() => this.actions.pipe(
    ofType(AccountActions.register),
    switchMap((action) => this.saveUserService.mutate({
      entity: {
        user: action.entity
      }
    })),
    map(response => AccountActions.registered(response.data?.saveUserContext?.user as UserEntity))
  ));

  registered = createEffect(() => this.actions.pipe(
    ofType(AccountActions.registered),
    tap(() => this.router.navigate([`/${accountUrl}`, 'login'])),
    map(() => CoreActions.setFeedback({
      type: FeedbackType.Success,
      labelMessage: 'registrationReceived'
    }))
  ));

  sendPasswordReset = createEffect(() =>
    this.actions.pipe(
      ofType(AccountActions.sendPasswordReset),
      switchMap((action) =>
        this.sendPasswordResetService.mutate({
          email: action.email
        })
      ),
      filter(response => !!response.data?.sendPasswordReset),
      tap(() => this.router.navigate([`/${accountUrl}`, 'login'])),
      map(() => CoreActions.setFeedback({
        type: FeedbackType.Success,
        labelMessage: 'mailSentSucessfully'
      }))
    )
  );

  resetPassword = createEffect(() =>
    this.actions.pipe(
      ofType(AccountActions.resetPassword),
      switchMap((action) =>
        this.resetPasswordService.mutate({
          token: action.token,
          password: action.password,
        })
      ),
      filter(response => !!response.data?.resetPassword),
      tap(() => this.router.navigate([`/${accountUrl}`, 'login'])),
      map(() => CoreActions.setFeedback({
        type: FeedbackType.Success,
        labelMessage: 'resetPasswordSuccess'
      }))
    )
  );

  verify = createEffect(() => this.actions.pipe(
    ofType(AccountActions.verify),
    switchMap((action) => this.verifyUserService.mutate({
      token: action.token
    })),
    map(response => AccountActions.verified(response.data?.verify?.verified))
  ));

  sendMailVerification = createEffect(() =>
    this.actions.pipe(
      ofType(AccountActions.sendMailVerification),
      switchMap((action) =>
        this.sendVerificationService.mutate({
          email: action.email
        })
      ),
      filter(response => !!response.data?.sendVerification),
      tap(() => this.router.navigate([`/${accountUrl}`, 'login'])),
      map(() => CoreActions.setFeedback({
        type: FeedbackType.Success,
        labelMessage: 'mailSentSucessfully'
      }))
    )
  );

  save = createEffect(() => this.actions.pipe(
    ofType(AccountActions.save),
    switchMap((action) => this.saveUserService.mutate({
      entity: {
        user: action.entity
      }
    })),
    map(response => AccountActions.saved(response.data?.saveUserContext as UserContextEntity))
  ));

  saved = createEffect(() => this.actions.pipe(
    ofType(AccountActions.saved),
    tap(() => this.router.navigate(['/'])),
    map(() => CoreActions.setFeedback({
      type: FeedbackType.Success,
      labelMessage: 'dataSaved'
    }))
  ));

  constructor(
    private router: Router,
    private actions: Actions,
    private verifyUserService: VerifyUserGQL,
    private sendPasswordResetService: SendPasswordResetGQL,
    private sendVerificationService: SendVerificationGQL,
    private resetPasswordService: ResetPasswordGQL,
    private saveUserService: SaveUserGQL) { }
}
