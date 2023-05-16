import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable, combineLatestWith, map, take, tap } from 'rxjs';
import { pwBitStrengthConfig } from 'src/app/core/constants/core.constants';
import { selectConfiguration } from 'src/app/core/state/core.selectors';
import { CheckPasswordGQL } from 'src/schema/schema';
import { PasswordActions } from '../state/password.actions';

@Injectable()
export class PasswordValidator {

  constructor(
    private store: Store,
    private checkPasswordService: CheckPasswordGQL,
  ) { }

  public validate(control: AbstractControl): Observable<null | {passwordWeak: boolean }> {
    return  this.checkPasswordService.mutate({
        password: control.value
      }).pipe(
      combineLatestWith(this.store.select(selectConfiguration(pwBitStrengthConfig))),
      map(([passwordStrength, minStrength]) =>
        (passwordStrength.data?.checkPassword || 0) / (minStrength?.value ? parseFloat(minStrength?.value) : 40)),
      tap(strengthRate => this.store.dispatch(PasswordActions.setPasswordStrength(strengthRate)) ),
      map(strengthRate => strengthRate < 1 ? { passwordWeak : true } : null),  
      take(1)
    );
  }
}