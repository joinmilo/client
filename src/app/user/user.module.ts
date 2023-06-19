import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CoreModule } from 'src/app/core/core.module';
import { FormModule } from 'src/app/shared/form/form.module';
import { CaptchaModule } from '../shared/captcha/captcha.module';
import { LoadingComponent } from '../shared/loading/loading.component';
import { TitleModule } from '../shared/title/title.module';
import { PortalFooterModule } from './../portal/shared/footer/portal-footer.module';
import { PasswordModule } from './../shared/password/password.module';
import { ImageSliderComponent } from './components/image-slider/image-slider.component';
import { LoginComponent } from './components/login/login.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { PasswordSendMailComponent } from './components/password-send-mail/password-send-mail.component';
import { PasswordSetNewComponent } from './components/password-set-new/password-set-new.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { VerificationSendMailComponent } from './components/verification-send-mail/verification-send-mail.component';
import { VerificationComponent } from './components/verification/verification.component';
import { userFeatureKey } from './constants/user.constants';
import { UserEffects } from './state/user.effects';
import { userReducer } from './state/user.reducer';
import { UserPortalRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';

const components = [
  ImageSliderComponent,
  LoginComponent,
  NotificationsComponent,
  PasswordSetNewComponent,
  PasswordSendMailComponent,
  RegistrationComponent,
  UserComponent,
  VerificationComponent,
  VerificationSendMailComponent,
];

const framework = [
  CommonModule,
  ReactiveFormsModule,
];

const materials = [
  MatDividerModule,
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
  TitleModule,
  UserPortalRoutingModule,

  LoadingComponent,
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
