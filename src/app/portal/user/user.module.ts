import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { NgHcaptchaModule } from 'ng-hcaptcha';
import { CoreModule } from 'src/app/core/core.module';
import { FormModule } from 'src/app/shared/form/form.module';
import { PortalCommonModule } from './../common/common.module';
import { RegistrationFormComponent } from './components/registration-form/registration-form.component';
import { RegistrationSliderComponent } from './components/registration-slider/registration-slider.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { VerificationComponent } from './components/verification/verification.component';
import { userFeatureKey } from './constants/user.constants';
import { UserEffects } from './state/user.effects';
import { userReducer } from './state/user.reducer';
import { UserPortalRoutingModule } from './user-routing.module';

const components = [
  VerificationComponent,
  RegistrationComponent,
  RegistrationSliderComponent,
  RegistrationFormComponent
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
];

const modules = [
  CoreModule,
  FormModule,
  PortalCommonModule,
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
export class UserPortalModule { }
