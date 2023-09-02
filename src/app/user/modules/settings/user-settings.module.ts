import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CoreModule } from 'src/app/core/core.module';
import { PasswordModule } from 'src/app/shared/form/password/password.module';
import { TitleModule } from 'src/app/shared/layout/title/title.module';
import { CardModule } from 'src/app/shared/widgets/card/card.module';
import { MediaModule } from 'src/app/shared/widgets/media/media.module';
import { UserLayoutComponent } from './components/layout/user-layout.component';
import { UserChangePasswordComponent } from './components/profile-data/change-password/user-change-password.component';
import { UserDeleteAccountConfirmationComponent } from './components/profile-data/delete-account/delete-account-confirmation/user-delete-account-confirmation.component';
import { UserDeleteAccountDescriptionComponent } from './components/profile-data/delete-account/delete-account-description/user-delete-account-description.component';
import { UserDeleteAccountReasonComponent } from './components/profile-data/delete-account/delete-account-reason/user-delete-account-reason.component';
import { UserMediaUploadProfilePictureComponent } from './components/profile-data/personal-data/media-upload/media-upload-profile-picture/user-media-upload-profile-picture.component';
import { UserMediaUploadTitleImageComponent } from './components/profile-data/personal-data/media-upload/media-upload-title-image/user-media-upload-title-image.component';
import { UserPersonalDataFormComponent } from './components/profile-data/personal-data/user-personal-data-form.component';
import { UserSettingsMenuComponent } from './components/settings-menu/user-settings-menu.component';
import { userSettingsStateKey } from './constants/portal-settings.constants';
import { UserSettingsEffects } from './state/user-settings.effects';
import { portalSettingsReducer } from './state/user-settings.reducer';
import { UserSettingsRoutingModule } from './user-settings-routing.module';


const components = [
  UserPersonalDataFormComponent,
  UserChangePasswordComponent,
  UserDeleteAccountConfirmationComponent,
  UserDeleteAccountDescriptionComponent,
  UserDeleteAccountReasonComponent,
  UserLayoutComponent,
  UserMediaUploadProfilePictureComponent,
  UserMediaUploadTitleImageComponent,
  UserSettingsMenuComponent,
];

const framework = [
  CommonModule,
  ReactiveFormsModule,
];

const materials = [
  MatButtonModule,
  MatCheckboxModule,
  MatDialogModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
];

const routes = [
  UserSettingsRoutingModule, //TODO: always last entry duet to order and redirect to 404, Remove 404 and put in AppRouter
]



const modules = [
  CardModule,
  CoreModule,
  MediaModule,
  PasswordModule,
  TitleModule,
];

const libs = [
  FontAwesomeModule,
  StoreModule.forFeature(userSettingsStateKey, portalSettingsReducer),
  EffectsModule.forFeature([UserSettingsEffects]),
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
