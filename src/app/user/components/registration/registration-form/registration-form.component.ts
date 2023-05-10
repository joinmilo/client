import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroupDirective, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { UserActions } from 'src/app/user/state/user.actions';
import { selectSavedUser } from 'src/app/user/state/user.selectors';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss'],
})
export class RegistrationFormComponent implements OnDestroy {

  password?: string;

  public form = this.fb.group({
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    captchaToken: ['', [Validators.required]],
    termsAccepted: [false, [Validators.requiredTrue]],
  });

  private destroy = new Subject<void>();

  constructor(
    private store: Store,
    private fb: FormBuilder,
  ) { }

  onPasswordChanged(value: string) {
    this.password = value;
  }

  onSubmit(formDirective: FormGroupDirective) {
    this.store.dispatch(UserActions.saveUser({
      firstName: this.form.value.firstName,
      lastName: this.form.value.lastName,
      email: this.form.value.email,
      password: this.password,
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
