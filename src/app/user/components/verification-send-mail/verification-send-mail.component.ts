import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { UserActions } from 'src/app/user/state/user.actions';


@Component({
  selector: 'app-verification-send-mail',
  templateUrl: './verification-send-mail.component.html',
  styleUrls: [
    '../form.scss',
    './verification-send-mail.component.scss'
  ],
})
export class VerificationSendMailComponent {

  public form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
  });

  constructor(
    private store: Store,
    private fb: FormBuilder,
  ) {
  }

  public onSubmit(): void {
    this.store.dispatch(UserActions.sendMailVerification(
       this.form.value.email
    ));
  }

}