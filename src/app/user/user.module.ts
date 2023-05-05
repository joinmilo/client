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
import { PortalFooterModule } from './../portal/shared/footer/portal-footer.module';
import { ImageSliderComponent } from './components/image-slider/image-slider.component';
import { LoginFormComponent } from './components/login/login-form/login-form.component';
import { LoginComponent } from './components/login/login.component';
import { PasswordInputComponent } from './components/password/password-input.component';
import { RegistrationFormComponent } from './components/registration/registration-form/registration-form.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { SendPasswordResetComponent } from './components/reset-password/send-password-reset/send-password-reset.component';
import { SetNewPasswordComponent } from './components/reset-password/set-new-password/set-new-password.component';
import { VerificationComponent } from './components/verification/verification.component';
import { userFeatureKey } from './constants/user.constants';
import { UserEffects } from './state/user.effects';
import { userReducer } from './state/user.reducer';
import { UserPortalRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';

const components = [
  UserComponent,
  VerificationComponent,
  RegistrationComponent,
  RegistrationFormComponent,
  LoginFormComponent,
  SendPasswordResetComponent,
  SetNewPasswordComponent,
  PasswordInputComponent,
  ImageSliderComponent,
  LoginComponent
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
  PortalFooterModule,
  UserPortalRoutingModule,
];

const libs = [
  StoreModule.forFeature(userFeatureKey, userReducer),
  EffectsModule.forFeature([UserEffects]),
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
export class UserModule { }
