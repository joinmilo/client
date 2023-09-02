import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-user-change-password',
  templateUrl: './user-change-password.component.html',
  styleUrls: ['./user-change-password.component.scss'],
})
export class UserChangePasswordComponent { 

  public form = this.fb.group({
    password: ['', [Validators.required]],
  });

  constructor(  
    private store: Store,
    private fb: FormBuilder
  ) { }
}