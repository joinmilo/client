import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CoreModule } from 'src/app/core/core.module';
import { FormModule } from 'src/app/shared/form/form.module';
import { CaptchaModule } from '../shared/captcha/captcha.module';
import { PortalFooterModule } from './../portal/shared/footer/portal-footer.module';
import { PasswordModule } from './../shared/password/password.module';
import { ImageSliderComponent } from './components/image-slider/image-slider.component';
import { LoginComponent } from './components/login/login.component';
import { SendPasswordResetComponent } from './components/password-reset/send-password-reset.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { SetNewPasswordComponent } from './components/set-new-password/set-new-password.component';
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
  SendPasswordResetComponent,
  SetNewPasswordComponent,
  ImageSliderComponent,
  LoginComponent,
];

const framework = [
  CommonModule,
  ReactiveFormsModule,
];

const materials = [
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatButtonToggleModule,
];

const modules = [
  CaptchaModule,
  CoreModule,
  FormModule,
  PasswordModule,
  PortalFooterModule,
  UserPortalRoutingModule,
];

const libs = [
  FontAwesomeModule,
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
