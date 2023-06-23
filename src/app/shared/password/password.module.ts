import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { StoreModule } from '@ngrx/store';
import { CoreModule } from 'src/app/core/core.module';
import { PasswordConfirmComponent } from './components/confirm/password-confirm.component';
import { PasswordFormComponent } from './components/field/password-field.component';
import { PasswordStrengthComponent } from './components/strength/password-strength.component';
import { passwordStateKey } from './constants/password.constants';
import { PasswordValidator } from './services/password-validator.service';
import { passwordReducer } from './state/password.reducer';


const components = [
  PasswordConfirmComponent,
  PasswordFormComponent,
  PasswordStrengthComponent,
];

const framework = [
  CommonModule,
  ReactiveFormsModule,
  FormsModule,
];

const materials = [
  FontAwesomeModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatCardModule,
  MatButtonToggleModule,
];

const modules = [
  CoreModule,
];

const libs = [
  StoreModule.forFeature(passwordStateKey, passwordReducer),
]

@NgModule({
  declarations: [...components],
  imports: [
    ...materials,
    ...framework,
    ...modules,
    ...libs,
  ],
  exports: [...components],
  providers: [
    PasswordValidator
  ]
})
export class PasswordModule { }
