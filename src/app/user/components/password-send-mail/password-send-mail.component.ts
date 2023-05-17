import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { UserActions } from 'src/app/user/state/user.actions';


@Component({
  selector: 'app-password-send-mail',
  templateUrl: './password-send-mail.component.html',
  styleUrls: [
    '../form.scss',
    './password-send-mail.component.scss'
  ],
})
export class PasswordSendMailComponent {

  public form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
  });

  constructor(
    private store: Store,
    private fb: FormBuilder,
  ) {
  }

  public onSubmit(): void {
    this.store.dispatch(UserActions.sendPasswordReset(
       this.form.value.email
    ));
  }
}