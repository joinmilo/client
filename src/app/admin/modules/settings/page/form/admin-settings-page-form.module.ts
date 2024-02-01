
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { RichtextEditorFormComponent } from 'ngx-cinlib/forms/richtext';
import { CoreModule } from 'src/app/core/core.module';
import { CaptchaModule } from 'src/app/shared/form/captcha/captcha.module';
import { FormStepperModule } from 'src/app/shared/form/stepper/form-stepper.module';
import { GridLayoutModule } from 'src/app/shared/layout/grid-layout/grid-layout.module';
import { TitleModule } from 'src/app/shared/layout/title/title.module';
import { MediaFormModule } from 'src/app/shared/media/modules/form/media-form.module';
import { AdminSettingsPageEmbeddingModule } from '../embedding/admin-settings-page-embedding.module';
import { AdminSettingsPageMenuModule } from '../menu/admin-settings-page-menu.module';
import { AdminSettingsPageFormRoutingModule } from './admin-settings-page-form.module-routing.module';
import { AdminSettingsPageFormComponent } from './component/admin-settings-page-form.component';
import { adminSettingsPageFormStateKey } from './constants/admin-settings-page-form.constants';
import { AdminSettingsPageFormEffects } from './state/admin-settings-page-form.effects';
import { adminSettingsPageFormReducer } from './state/admin-settings-page-form.reducer';

const components = [
  AdminSettingsPageFormComponent,
];

const framework = [
  CommonModule,
  ReactiveFormsModule,
  FormsModule,
];

const materials = [
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
];

const modules = [
  AdminSettingsPageEmbeddingModule,
  AdminSettingsPageFormRoutingModule,
  AdminSettingsPageMenuModule,
  CoreModule,
  CaptchaModule,
  GridLayoutModule,
  FormStepperModule,
  MediaFormModule,
  TitleModule,
];

const libs = [
  StoreModule.forFeature(adminSettingsPageFormStateKey, adminSettingsPageFormReducer),
  EffectsModule.forFeature([AdminSettingsPageFormEffects]),

  RichtextEditorFormComponent,
]

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
export class AdminSettingsPageFormModule { }
