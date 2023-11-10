import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatStepperModule } from '@angular/material/stepper';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CoreModule } from 'src/app/core/core.module';
import { PortalFooterModule } from '../portal/modules/footer/portal-footer.module';
import { AddressFormModule } from '../shared/form/address/address-form.module';
import { CaptchaModule } from '../shared/form/captcha/captcha.module';
import { PasswordModule } from '../shared/form/password/password.module';
import { PrivacyPolicyFormComponent } from '../shared/form/privacy-policy/privacy-policy-form.component';
import { LoadingComponent } from '../shared/layout/loading/loading.component';
import { TitleModule } from '../shared/layout/title/title.module';
import { MediaFormModule } from '../shared/media/modules/form/media-form.module';
import { MediaWidgetsModule } from '../shared/media/modules/widgets/media-widgets.module';
import { UserPortalRoutingModule } from './account-routing.module';
import { FirstLoginFormComponent } from './components/first-login-form/first-login-form.component';
import { ImageSliderComponent } from './components/image-slider/image-slider.component';
import { AccountLayoutComponent } from './components/layout/account-layout.component';
import { LoginRequiredComponent } from './components/login-required/login-required.component';
import { LoginComponent } from './components/login/login.component';
import { PasswordSendMailComponent } from './components/password-send-mail/password-send-mail.component';
import { PasswordSetNewComponent } from './components/password-set-new/password-set-new.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { VerificationSendMailComponent } from './components/verification-send-mail/verification-send-mail.component';
import { VerificationComponent } from './components/verification/verification.component';
import { accountFeatureKey } from './constants/account.constants';
import { AccountEffects } from './state/account.effects';
import { accountReducer } from './state/account.reducer';

const components = [
  AccountLayoutComponent,
  ImageSliderComponent,
  LoginComponent,
  FirstLoginFormComponent,
  LoginRequiredComponent,
  PasswordSetNewComponent,
  PasswordSendMailComponent,
  RegistrationComponent,
  VerificationComponent,
  VerificationSendMailComponent,
];

const framework = [
  CommonModule,
  ReactiveFormsModule,
  FormsModule
];

const materials = [
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatStepperModule,
  MatSlideToggleModule,
  MatSelectModule,
  MatAutocompleteModule,
];

const modules = [
  CaptchaModule,
  CoreModule,
  PasswordModule,
  PortalFooterModule,
  PrivacyPolicyFormComponent,
  TitleModule,
  UserPortalRoutingModule,
  LoadingComponent,
  MediaFormModule,
  MediaWidgetsModule,
  AddressFormModule,
];

const libs = [
  FontAwesomeModule,
  StoreModule.forFeature(accountFeatureKey, accountReducer),
  EffectsModule.forFeature([AccountEffects]),
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
export class AccountModule { }
