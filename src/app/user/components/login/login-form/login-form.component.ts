import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroupDirective, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { UserActions } from 'src/app/user/state/user.actions';
import { selectSavedUser } from 'src/app/user/state/user.selectors';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnDestroy, OnInit {

  onConfirmInput() {
    if (this.form.get('password')?.value !== this.form.get('confirm')?.value) {
      this.form.get('confirm')?.setErrors({ notSame: true });
    } else {
      this.form.get('confirm')?.setErrors(null);
    }
  }

  public form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  });

  hide: boolean = true;

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
    this.store.dispatch(UserActions.userLogin(
      this.form.value.email,
      this.form.value.password
    ))

    this.store.select(selectSavedUser)
      .pipe(takeUntil(this.destroy))
      .subscribe(user => user?.id && formDirective.resetForm());
  }

  ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }
}
