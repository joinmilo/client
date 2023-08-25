import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CoreModule } from 'src/app/core/core.module';
import { TitleModule } from 'src/app/shared/layout/title/title.module';
import { CardModule } from 'src/app/shared/widgets/card/card.module';
import { MediaModule } from 'src/app/shared/widgets/media/media.module';
import { PortalSettingsComponent } from './components/portal-settings.component';
import { PortalChangePasswordComponent } from './components/profile-data/change-password/portal-change-password.component';
import { PortalDeleteAccountConfirmationComponent } from './components/profile-data/delete-account/delete-account-confirmation/portal-delete-account-confirmation.component';
import { PortalDeleteAccountDescriptionComponent } from './components/profile-data/delete-account/delete-account-description/portal-delete-account-description.component';
import { PortalDeleteAccountReasonComponent } from './components/profile-data/delete-account/delete-account-reason/portal-delete-account-reason.component';
import { PortalPersonalDataFormComponent } from './components/profile-data/personal-data/portal-personal-data-form.component';
import { portalSettingsStateKey } from './constants/portal-settings.constants';
import { PortalSettingsRoutingModule } from './portal-user-settings-routing.module';
import { PortalSettingsEffects } from './state/portal-settings.effects';
import { portalSettingsReducer } from './state/portal-settings.reducer';


const components = [
  PortalPersonalDataFormComponent,
  PortalChangePasswordComponent,
  PortalDeleteAccountConfirmationComponent,
  PortalDeleteAccountDescriptionComponent,
  PortalDeleteAccountReasonComponent,
  PortalSettingsComponent,
];

const framework = [
  CommonModule,
  ReactiveFormsModule,
];

const materials = [
  MatButtonModule,
  MatCheckboxModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatInputModule,
  MatRadioModule,
  MatSelectModule,
];


const modules = [
  CardModule,
  CoreModule,
  MediaModule,
  PortalSettingsRoutingModule,
  TitleModule,
];

const libs = [
  FontAwesomeModule,
  StoreModule.forFeature(portalSettingsStateKey, portalSettingsReducer),
  EffectsModule.forFeature([PortalSettingsEffects]),
];

@NgModule({
  declarations: [...components],
  imports: [
    ...framework,
    ...materials,
    ...modules,
    ...libs,
  ],
  exports: [...components],
})
export class PortalSettingsModule { }
