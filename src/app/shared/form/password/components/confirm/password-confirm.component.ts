import { Component, OnDestroy } from '@angular/core';
import { ControlValueAccessor, FormBuilder, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validator, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Maybe } from 'graphql/jsutils/Maybe';
import { Subject, takeUntil } from 'rxjs';
import { AppValidators } from 'src/app/core/validators/validators';
import { PasswordValidator } from '../../services/password-validator.service';
import { PasswordActions } from '../../state/password.actions';

@Component({
  selector: 'app-password-confirm',
  templateUrl: './password-confirm.component.html',
  styleUrls: ['./password-confirm.component.scss'],
  providers: [
    {
      provide: NG_VALIDATORS,
      multi: true,
      useExisting: PasswordConfirmComponent
    },
    {
      provide: NG_VALUE_ACCESSOR,
      multi:true,
      useExisting: PasswordConfirmComponent
    },
  ]
})
export class PasswordConfirmComponent implements ControlValueAccessor, OnDestroy, Validator {

  private onChange?: (value?: Maybe<string>) => void;
  private onTouched?: () => void;

  public form = this.fb.group({
    password: ['',
      [Validators.required],
      [this.passwordValidator.validate.bind(this.passwordValidator)]
    ],
    confirm: ['',
      [Validators.required]
    ]
  }, {validators: AppValidators.same('password', 'confirm')});

  get valid(): boolean {
    return this.form.valid;
  }

  private destroy = new Subject<void>();

  constructor(
    private fb: FormBuilder,
    private store: Store,
    private passwordValidator: PasswordValidator) {
      this.form.valueChanges
        .pipe(takeUntil(this.destroy))
        .subscribe(value => this.mark(value?.password));
  }  

  public writeValue(value: Maybe<string>): void {
    this.form.patchValue({
      password: value
    });
    this.mark(value);
  }

  public mark(value: Maybe<string>) {
    !value && this.store.dispatch(PasswordActions.resetPasswordStrength());
    this.onChange && this.onChange(value);
    this.onTouched && this.onTouched();
  }

  public registerOnChange(onChange: (value?: Maybe<string>) => void): void {
    this.onChange = onChange;
  }

  public registerOnTouched(onTouched?: () => void): void {
    this.onTouched = onTouched;
  }

  public setDisabledState?(isDisabled: boolean): void {
    isDisabled
      ? this.form.disable()
      : this.form.enable();
  }

  public validate(): ValidationErrors | null {
    return !this.valid
      ? {
          ...this.form.errors,
          ...this.form.controls.confirm.errors,
          ...this.form.controls.password.errors
        }
      : null;
  }

  ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }
}