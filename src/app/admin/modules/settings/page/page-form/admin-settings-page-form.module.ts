
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CoreModule } from 'src/app/core/core.module';
import { CaptchaModule } from 'src/app/shared/form/captcha/captcha.module';
import { CkEditorFormComponent } from 'src/app/shared/form/ck-editor/ck-editor-form.component';
import { FormStepperModule } from 'src/app/shared/form/stepper/form-stepper.module';
import { GridLayoutModule } from 'src/app/shared/layout/grid-layout/grid-layout.module';
import { TitleModule } from 'src/app/shared/layout/title/title.module';
import { MediaFormModule } from 'src/app/shared/media/modules/form/media-form.module';
import { AdminSettingsPageEmbeddingModule } from '../embedding/admin-settings-page-embedding.module';
import { AdminSettingsPageFormRoutingModule } from './admin-settings-page-form.module-routing.module';
import { AdminSettingsPageFormComponent } from './component/admin-settings-page-form.component';
import { adminSettingsPageFormStateKey } from './constants/admin-settings-page-form.constants';
import { AdminSettingsPageFormEffects } from './state/admin-settings-page-form.effects';
import { adminSettingsPageFormReducer } from './state/admin-settings-page-form.reducer';

const components = [
  AdminSettingsPageFormComponent
];

const framework = [
  CommonModule,
  ReactiveFormsModule,
  FormsModule,
];

const materials = [
  MatButtonModule,
  MatDividerModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatSlideToggleModule
];

const modules = [
  AdminSettingsPageEmbeddingModule,
  AdminSettingsPageFormRoutingModule,
  CoreModule,
  CaptchaModule,
  CkEditorFormComponent,
  GridLayoutModule,
  FormStepperModule,
  MediaFormModule,
  TitleModule,
];

const libs = [
  StoreModule.forFeature(adminSettingsPageFormStateKey, adminSettingsPageFormReducer),
  EffectsModule.forFeature([AdminSettingsPageFormEffects]),
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
