import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { FeedbackType } from 'ngx-cinlib/modals/feedback';
import { filter, map, switchMap, tap } from 'rxjs';
import { AddressEntity, Maybe, OrganisationEntity, UserContextEntity } from 'src/app/core/api/generated/schema';
import { accountUrl } from 'src/app/core/constants/module.constants';
import { CoreActions } from '../../core/state/actions/core.actions';
import { GetOrganisationsGQL } from '../api/generated/account-get-organisation.generated';
import { ResetPasswordGQL } from '../api/generated/account-reset-password.mutation.generated';
import { SaveUserGQL } from '../api/generated/account-save-user.mutation.generated';
import { SendPasswordResetGQL } from '../api/generated/account-send-password-reset.mutation.generated';
import { SendVerificationGQL } from '../api/generated/account-send-verification.mutation.generated';
import { VerifyAddressGQL } from '../api/generated/account-verify-address.mutation.generated';
import { VerifyUserGQL } from '../api/generated/account-verify-user.mutation.generated';
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
    map(response => AccountActions.registered(response.data?.saveUserContext?.id))
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

  saveFirstLogin = createEffect(() => this.actions.pipe(
    ofType(AccountActions.saveFirstLogin),
    switchMap((action) => this.saveUserService.mutate({
      entity: action.entity
    })),
    map(response => AccountActions.savedFirstLogin(response.data?.saveUserContext as UserContextEntity))
  ));

  savedFirstLogin = createEffect(() => this.actions.pipe(
    ofType(AccountActions.savedFirstLogin),
    tap(() => this.router.navigate(['/'])),
    map(() => CoreActions.setFeedback({
      type: FeedbackType.Success,
      labelMessage: 'dataSaved'
    }))
  ));

  verifyAddress = createEffect(() => this.actions.pipe(
    ofType(AccountActions.verifyAddress),
    switchMap((action) => this.verifyAddressService.mutate({
      entity: action.entity
    })),
    map(response => AccountActions.addressVerified(response.data?.verifyAddress as AddressEntity))
  ));

  getOrganisations = createEffect(() => this.actions.pipe(
    ofType(AccountActions.getOrganisations),
    switchMap(() => this.getOrganisationsService.watch({
      params:{
        sort: 'name',
        dir: 'asc'
      }
    }).valueChanges),
    map(response => AccountActions.setOrganisations(response.data?.getOrganisations?.result as Maybe<OrganisationEntity[]>))
  ));

  constructor(
    private router: Router,
    private actions: Actions,
    private verifyUserService: VerifyUserGQL,
    private sendPasswordResetService: SendPasswordResetGQL,
    private sendVerificationService: SendVerificationGQL,
    private resetPasswordService: ResetPasswordGQL,
    private saveUserService: SaveUserGQL,
    private verifyAddressService: VerifyAddressGQL,
    private getOrganisationsService: GetOrganisationsGQL
    ) { }
}
