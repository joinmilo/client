import { Component, forwardRef, Input, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Maybe } from 'graphql/jsutils/Maybe';
import { distinctUntilChanged, Subject, takeUntil, tap } from 'rxjs';
import { selectConfiguration } from 'src/app/core/state/core.selectors';
import { UserActions } from '../../state/user.actions';
import { pwBitStrengthConfig } from './../../../core/constants/core.constants';
import { selectSetEntropy } from './../../state/user.selectors';

@Component({
  selector: 'app-password-input',
  templateUrl: './password-input.component.html',
  styleUrls: ['./password-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PasswordInputComponent),
      multi: true
    }
  ]
})
export class PasswordInputComponent implements OnInit, OnDestroy {
  @Input() parentForm?: FormGroup;
  @Input() showConfirm: boolean = true;
  form: FormGroup;
  hide = true;
  hideConfirm = true;
  pwSuccess = false;
  pwBitStrength: Maybe<number>;
  public adjustedEntropy?: number;

  private onChange: (value: any) => void = () => { };
  private onTouched: () => void = () => { };
  private destroy = new Subject<void>();

  constructor(private fb: FormBuilder, private store: Store) {
    this.form = this.fb.group({
      password: ['', [Validators.required]],
      confirm: ['', [Validators.required]]
    });

    this.form.valueChanges.pipe(takeUntil(this.destroy)).subscribe(value => {
      this.onChange(value);
      this.onTouched();
    });
  }

  ngOnInit(): void {
    this.store.select(selectConfiguration(pwBitStrengthConfig)).pipe(takeUntil(this.destroy))
      .subscribe(config => {
        if (config?.value) {
          this.pwBitStrength = parseFloat(config?.value)
        }
      });

    this.parentForm?.addControl('password', this.form.get('password')!);
    this.form.get('password')?.valueChanges.pipe(distinctUntilChanged(), takeUntil(this.destroy)).subscribe(() => {
      this.onPasswordInput()
      this.onConfirmInput();
    });
    if (this.showConfirm) {
      this.parentForm?.addControl('confirm', this.form.get('confirm')!);
      this.form.get('confirm')?.valueChanges.pipe(distinctUntilChanged(), takeUntil(this.destroy)).subscribe(() => {
        this.onConfirmInput();
      });
    }
  }

  writeValue(value: any): void {
    if (value) {
      this.form.setValue(value, { emitEvent: false });
    }
  }

  registerOnChange(fn: (value: any) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  onPasswordInput() {
    const password = this.form.get('password')?.value as string;
    this.store.dispatch(UserActions.checkPassword(password));

    this.store.select(selectSetEntropy).pipe(
      distinctUntilChanged(),
      tap(entropy => {
        this.checkPwSuccess(entropy!);
      })
    ).subscribe();
  }

  onConfirmInput() {
    if (this.showConfirm) {
      if (this.form.get('password')?.value !== this.form.get('confirm')?.value) {
        this.form.get('confirm')?.setErrors({ notSame: true });
      } else {
        this.form.get('confirm')?.setErrors(null);
      }
    }
  }

  checkPwSuccess(entropy: number) {
    this.adjustedEntropy = entropy / (this.pwBitStrength ?? 1) * 50;
    if ((this.adjustedEntropy) > 50) {
      this.pwSuccess = true;
      this.form.get('password')?.setErrors(null);
    } else {
      this.pwSuccess = false;
      this.form.get('password')?.setErrors({ pwWeak: true });
    }
  }

  ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }
}