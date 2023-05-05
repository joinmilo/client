import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CoreModule } from 'src/app/core/core.module';
import { FormModule } from 'src/app/shared/form/form.module';
import { PortalFooterModule } from './../portal/shared/footer/portal-footer.module';
import { LoginComponent } from './components/login/base/login.component';
import { LoginFormComponent } from './components/login/login-form/login-form.component';
import { SendPasswordResetComponent } from './components/login/reset-password/send-password-reset/send-password-reset.component';
import { SetNewPasswordComponent } from './components/login/reset-password/set-new-password/set-new-password.component';
import { PasswordInputComponent } from './components/password/password-input.component';
import { RegistrationComponent } from './components/registration/base/registration.component';
import { ImageSliderComponent } from './components/registration/image-slider/image-slider.component';
import { RegistrationFormComponent } from './components/registration/registration-form/registration-form.component';
import { VerificationComponent } from './components/verification/verification.component';
import { userFeatureKey } from './constants/user.constants';
import { UserEffects } from './state/user.effects';
import { userReducer } from './state/user.reducer';
import { UserPortalRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';

const components = [
  LoginFormComponent,
  LoginComponent,
  PasswordInputComponent,
  RegistrationComponent,
  RegistrationFormComponent,
  SendPasswordResetComponent,
  SetNewPasswordComponent,
  ImageSliderComponent,
  UserComponent,
  VerificationComponent,
];

const framework = [
  CommonModule,
  ReactiveFormsModule
];

const materials = [
  FontAwesomeModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
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
