import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroupDirective, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { UserActions } from '../../state/user.actions';
import { selectSavedUser } from '../../state/user.selectors';

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
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
    captchaToken: [''],
    termsAccepted: [false, [Validators.requiredTrue]],
  });

  private destroy = new Subject<void>();

  constructor(
    private store: Store,
    private fb: FormBuilder,
  ) { }

  onSubmit(formDirective: FormGroupDirective) {
    this.store.dispatch(UserActions.register({
      firstName: this.form.value.firstName,
      lastName: this.form.value.lastName,
      email: this.form.value.email,
      password: this.form.value.password,
      captchaToken: this.form.value.captchaToken,
      termsAccepted: this.form.value.termsAccepted,
    }));

    this.store.select(selectSavedUser)
      .pipe(takeUntil(this.destroy))
      .subscribe(user => user?.id && formDirective.resetForm());
  }

  ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }
}