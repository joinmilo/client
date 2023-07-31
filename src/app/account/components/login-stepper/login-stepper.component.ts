import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-login-stepper',
  templateUrl: './login-stepper.component.html',
  styleUrls: [
    '../form.scss',
    './login-stepper.component.scss'
  ],
})
export class LoginStepperComponent {

  public form = this.fb.group({
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    phone: [''],
  });

  constructor(
    private store: Store,
    private fb: FormBuilder,
  ) {}
  
}