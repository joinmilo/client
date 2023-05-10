import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Maybe } from 'graphql/jsutils/Maybe';
import { distinctUntilChanged, Subject, takeUntil, tap } from 'rxjs';
import { selectConfiguration } from 'src/app/core/state/core.selectors';
import { pwBitStrengthConfig } from '../../core/constants/core.constants';
import { PasswordActions } from './state/password.actions';
import { selectSetEntropy } from './state/password.selectors';

@Component({
  selector: 'app-password-input',
  templateUrl: './password-input.component.html',
  styleUrls: ['./password-input.component.scss'],

})
export class PasswordInputComponent implements OnInit, OnDestroy {
  @Output() passwordChanged = new EventEmitter<string>();
  @Input() showConfirm = true;
  public form: FormGroup;
  hidePassword = true;
  hideConfirm = true;
  pwSuccess = false;
  pwBitStrength: Maybe<number>;
  public adjustedEntropy?: number;

  private destroy = new Subject<void>();

  constructor(private fb: FormBuilder, private store: Store) {
    this.form = this.fb.group({
      password: ['', [Validators.required]],
      confirm: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    this.store.select(selectConfiguration(pwBitStrengthConfig)).pipe(
      takeUntil(this.destroy))
      .subscribe(config => {
        if (config?.value) {
          this.pwBitStrength = parseFloat(config?.value)
        }
      });
      
    this.form.get('password')?.valueChanges.pipe(
      distinctUntilChanged(),
      takeUntil(this.destroy)).subscribe((value) => {
      this.form.value.confirm = value;
      this.passwordChanged.emit(value);
      this.onPasswordInput();
    });

    this.form.get('confirm')?.valueChanges.pipe(
      distinctUntilChanged(),
      takeUntil(this.destroy)).subscribe((value) => {
      this.form.value.confirm = value;
      this.onConfirmInput();
    });

  }

  onPasswordInput() {
    const password = this.form.get('password')?.value as string;
    this.store.dispatch(PasswordActions.checkPassword(password));

    this.store.select(selectSetEntropy).pipe(
      distinctUntilChanged(),
      takeUntil(this.destroy),
      tap(entropy => {
        this.checkPwSuccess(entropy);
      })
    ).subscribe();
  }

  onConfirmInput() {
    if (this.showConfirm) {
      if (this.form.value.password !== this.form.value.confirm) {
        this.form.get('confirm')?.setErrors({ notSame: true });
      } else {
        this.form.get('confirm')?.setErrors(null);
      }
    }
  }

  checkPwSuccess(entropy: Maybe<number> | undefined) {
    this.adjustedEntropy = (entropy ?? 1) / (this.pwBitStrength ?? 1) * 50;
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