import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroupDirective, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { CommonActions } from '../../../common/state/common.actions';
import { selectSavedUser } from '../../../common/state/common.selectors';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnDestroy, OnInit {
  
  onConfirmInput() {
    if (this.form.get('password')?.value !== this.form.get('confirm')?.value) {
      this.form.get('confirm')?.setErrors({ notSame: true });
    } else {
      this.form.get('confirm')?.setErrors(null);
    }
  }

  public form = this.fb.group({
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
    confirm: ['', [Validators.required]],
    captchaToken: ['', [Validators.required]]
  });

  hide: boolean = true;

  hideConfirm: boolean = true;

  private destroy = new Subject<void>();

  constructor(
    private store: Store,
    private fb: FormBuilder,
  ) {
  }
  
  ngOnInit(): void {
    this.form.get('confirm')?.valueChanges.subscribe(() => {
      this.onConfirmInput();
    });
  }

  onSubmit(formDirective: FormGroupDirective) {
    this.store.dispatch(CommonActions.saveUser({
      firstName: this.form.value.firstName,
      lastName: this.form.value.lastName,
      email: this.form.value.email,
      password: this.form.value.password,
      captchaToken: this.form.value.captchaToken
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
