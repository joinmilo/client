import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { CoreActions } from 'src/app/core/state/core.actions';

@Component({
  selector: 'app-login-required',
  templateUrl: './login-required.component.html',
  styleUrls: [
    '../form.scss',
    './login-required.component.scss'
  ],
})
export class LoginRequiredComponent {

  public form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  });

  constructor(
    private store: Store,
    private fb: FormBuilder,
    private location: Location
  ) {}
  
  public onSubmit() {
    this.store.dispatch(CoreActions.login(
      this.form.value.email ?? '',
      this.form.value.password ?? '',
    ));
  }

  public back(): void {
    this.location.back();
  }
}