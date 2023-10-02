import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { CoreUserActions } from 'src/app/core/state/actions/core-user.actions';
import { UserSettingsActions } from '../../../../state/user-settings.actions';

@Component({
  selector: 'app-user-delete-account-confirmation',
  templateUrl: './user-delete-account-confirmation.component.html',
  styleUrls: ['./user-delete-account-confirmation.component.scss'],
})
export class UserDeleteAccountConfirmationComponent  {

  public form = this.fb.group({
    password: ['', [Validators.required]],
  });

  constructor(  
    private store: Store,
    private fb: FormBuilder
  ) { }

  onSubmit() {
    this.store.dispatch(UserSettingsActions.deleteUser(
      this.form.value.password
    ));
    this.store.dispatch(CoreUserActions.refreshExpired())
  }
}