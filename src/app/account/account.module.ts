import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatStepperModule } from '@angular/material/stepper';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CaptchaModule } from 'ngx-cinlib/forms/captcha';
import { IconComponent } from 'ngx-cinlib/icons';
import { LoadingComponent } from 'ngx-cinlib/layouts/loading';
import { CoreModule } from 'src/app/core/core.module';
import { PortalFooterModule } from '../portal/modules/footer/portal-footer.module';
import { AddressFormModule } from '../shared/form/address/address-form.module';
import { PasswordModule } from '../shared/form/password/password.module';
import { PrivacyPolicyFormComponent } from '../shared/form/privacy-policy/privacy-policy-form.component';
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
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatFormFieldModule,
  MatInputModule,
  MatOptionModule,
  MatSlideToggleModule,
  MatSelectModule,
  MatStepperModule,
];

const modules = [
  AddressFormModule,
  CoreModule,
  MediaFormModule,
  MediaWidgetsModule,
  PasswordModule,
  PortalFooterModule,
  PrivacyPolicyFormComponent,
  TitleModule,
  UserPortalRoutingModule,
];

const libs = [
  StoreModule.forFeature(accountFeatureKey, accountReducer),
  EffectsModule.forFeature([AccountEffects]),

  CaptchaModule,
  IconComponent,
  LoadingComponent,
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
