import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppValidators } from 'ngx-cinlib/forms/validators';
import { CoreUserActions } from 'src/app/core/state/actions/core-user.actions';

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
    email: ['', [Validators.required, AppValidators.email()]],
    password: ['', [Validators.required]],
  });

  constructor(
    private store: Store,
    private fb: FormBuilder,
  ) {}
  
  public onSubmit() {
    this.store.dispatch(CoreUserActions.login(
      this.form.value.email ?? '',
      this.form.value.password ?? '',
    ));
  }
}