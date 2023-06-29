import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroupDirective, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { UserActions } from '../../state/user.actions';
import { selectSavedUser } from '../../state/user.selectors';

@Component({
  selector: 'app-registration-required',
  templateUrl: './registration-required.component.html',
  styleUrls: [
    '../form.scss',
    './registration-required.component.scss'
  ],
})
export class RegistrationRequiredComponent implements OnDestroy {

  public form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
    termsAccepted: [false, [Validators.requiredTrue]],
  });

  private destroy = new Subject<void>();

  constructor(
    private store: Store,
    private fb: FormBuilder,
  ) { }

  onSubmit(captchaToken: string, formDirective: FormGroupDirective) {

    this.store.dispatch(UserActions.register({
      email: this.form.value.email,
      password: this.form.value.password,
      termsAccepted: this.form.value.termsAccepted,
      captchaToken,
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