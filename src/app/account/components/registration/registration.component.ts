import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroupDirective, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { CinValidators } from 'ngx-cinlib/forms/validators';
import { Subject, takeUntil } from 'rxjs';
import { AccountActions } from '../../state/account.actions';
import { selectRegisteredUserId } from '../../state/account.selectors';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: [
    '../form.scss',
    './registration.component.scss'
  ],
})
export class RegistrationComponent implements OnDestroy {

  public form = this.fb.group({
    email: ['', [Validators.required, CinValidators.email]],
    password: ['', Validators.required],
    termsAccepted: [false, [Validators.requiredTrue]],
  });

  private destroy = new Subject<void>();

  constructor(
    private store: Store,
    private fb: FormBuilder,
  ) { }

  onSubmit(captchaToken: string, formDirective: FormGroupDirective) {

    this.store.dispatch(AccountActions.register({
      email: this.form.value.email,
      password: this.form.value.password,
      termsAccepted: this.form.value.termsAccepted,
      captchaToken,
    }));

    this.store.select(selectRegisteredUserId)
      .pipe(takeUntil(this.destroy))
      .subscribe(id => id && formDirective.resetForm());
  }

  ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }
}