import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { UserActions } from '../../state/user.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [
    '../form.scss',
    './login.component.scss'
  ],
})
export class LoginComponent {

  public form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  });

  constructor(
    private store: Store,
    private fb: FormBuilder,
  ) {}
  
  public onSubmit() {
    this.store.dispatch(UserActions.login(
      this.form.value.email ?? '',
      this.form.value.password ?? '',
    ));
  }
}