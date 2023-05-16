import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectPasswordStrength } from '../../state/password.selectors';

@Component({
  selector: 'app-password-strength',
  templateUrl: './password-strength.component.html',
  styleUrls: ['./password-strength.component.scss'],
})
export class PasswordStrengthComponent {

  public rate = this.store.select(selectPasswordStrength);

  constructor(
    private store: Store
  ) { }
}