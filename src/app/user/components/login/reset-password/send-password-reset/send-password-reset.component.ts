import { UserActions } from './../../../../state/user.actions';
import { Component } from '@angular/core';
import { FormBuilder, FormGroupDirective, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { CommonActions } from 'src/app/portal/common/state/common.actions';


@Component({
  selector: 'app-send-password-reset',
  templateUrl: './send-password-reset.component.html',
  styleUrls: ['./send-password-reset.component.scss'],
})
export class SendPasswordResetComponent {

  public form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
  });

  constructor(
    private store: Store,
    private fb: FormBuilder,
  ) {
  }

  onSubmit(formDirective: FormGroupDirective) {
    this.store.dispatch(UserActions.sendPasswordReset(
       this.form.value.email
    ));
  }
}