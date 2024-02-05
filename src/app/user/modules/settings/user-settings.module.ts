import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatOptionModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { FormStepComponent, FormStepperComponent } from 'ngx-cinlib/forms/stepper';
import { IconComponent } from 'ngx-cinlib/icons';
import { GridColumnDirective, GridRowComponent } from 'ngx-cinlib/layouts/grid-layout';
import { CoreModule } from 'src/app/core/core.module';
import { AddressFormModule } from 'src/app/shared/form/address/address-form.module';
import { PasswordModule } from 'src/app/shared/form/password/password.module';
import { TitleModule } from 'src/app/shared/layout/title/title.module';
import { MediaFormModule } from 'src/app/shared/media/modules/form/media-form.module';
import { MediaWidgetsModule } from 'src/app/shared/media/modules/widgets/media-widgets.module';
import { CardModule } from 'src/app/shared/widgets/card/card.module';
import { UserLayoutComponent } from './components/layout/user-layout.component';
import { UserChangePasswordComponent } from './components/profile-data/change-password/user-change-password.component';
import { UserDeleteAccountConfirmationComponent } from './components/profile-data/delete-account/delete-account-confirmation/user-delete-account-confirmation.component';
import { UserDeleteAccountDescriptionComponent } from './components/profile-data/delete-account/delete-account-description/user-delete-account-description.component';
import { UserDeleteAccountReasonComponent } from './components/profile-data/delete-account/delete-account-reason/user-delete-account-reason.component';
import { UserPersonalDataFormComponent } from './components/profile-data/personal-data/user-personal-data-form.component';
import { userSettingsStateKey } from './constants/portal-settings.constants';
import { UserSettingsMenuMobileComponent } from './menu/settings-menu mobile/user-settings-menu-mobile.component';
import { UserSettingsMenuComponent } from './menu/settings-menu/user-settings-menu.component';
import { UserSettingsEffects } from './state/user-settings.effects';
import { portalSettingsReducer } from './state/user-settings.reducer';
import { UserSettingsRoutingModule } from './user-settings-routing.module';

const components = [
  UserChangePasswordComponent,
  UserDeleteAccountConfirmationComponent,
  UserDeleteAccountDescriptionComponent,
  UserDeleteAccountReasonComponent,
  UserLayoutComponent,
  UserPersonalDataFormComponent,
  UserSettingsMenuComponent,
  UserSettingsMenuMobileComponent,
];

const framework = [
  CommonModule,
  ReactiveFormsModule,
  FormsModule
];

const materials = [
  MatButtonModule,
  MatCheckboxModule,
  MatDialogModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatInputModule,
  MatMenuModule,
  MatSelectModule,
  MatOptionModule
];

const routes = [
  UserSettingsRoutingModule,
];

const modules = [
  AddressFormModule,
  CardModule,
  CoreModule,
  MediaFormModule,
  MediaWidgetsModule,
  PasswordModule,
  TitleModule,
];

const libs = [
  StoreModule.forFeature(userSettingsStateKey, portalSettingsReducer),
  EffectsModule.forFeature([UserSettingsEffects]),

  FormStepComponent,
  FormStepperComponent,
  GridColumnDirective,
  GridRowComponent,
  IconComponent,
];

@NgModule({
  declarations: [...components],
  imports: [
    ...framework,
    ...materials,
    ...modules,
    ...libs,
    ...routes,
  ],
  exports: [...components],
})
export class UserSettingsModule { }
