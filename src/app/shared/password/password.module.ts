import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatRadioModule } from '@angular/material/radio';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { NgHcaptchaModule } from 'ng-hcaptcha';
import { CoreModule } from 'src/app/core/core.module';
import { FormModule } from 'src/app/shared/form/form.module';
import { PasswordInputComponent } from './password-input.component';
import { passwordStateKey } from './password.constants';
import { PasswordEffects } from './state/password.effects';
import { passwordReducer } from './state/password.reducer';


const components = [
  PasswordInputComponent,
];

const framework = [
  CommonModule,
  ReactiveFormsModule
];

const materials = [
  FontAwesomeModule,
  MatFormFieldModule,
  MatCardModule,
  MatInputModule,
  MatButtonModule,
  MatRadioModule,
  MatCardModule,
  MatProgressBarModule,
  MatButtonToggleModule,
];

const modules = [
  CoreModule,
  FormModule,
];

const libs = [
  StoreModule.forFeature(passwordStateKey, passwordReducer),
  EffectsModule.forFeature([PasswordEffects]),
  NgHcaptchaModule.forRoot({
    languageCode: 'de' //TODO
  }),
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
})
export class PasswordModule { }
