
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
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CoreModule } from 'src/app/core/core.module';
import { CaptchaModule } from 'src/app/shared/form/captcha/captcha.module';
import { CkEditorFormComponent } from 'src/app/shared/form/ck-editor/ck-editor-form.component';
import { FormStepperModule } from 'src/app/shared/form/stepper/form-stepper.module';
import { GridLayoutModule } from 'src/app/shared/layout/grid-layout/grid-layout.module';
import { TitleModule } from 'src/app/shared/layout/title/title.module';
import { MediaModule } from 'src/app/shared/media/media.module';
import { AdminSettingsPageFormRoutingModule } from './admin-settings-page-form.module-routing.module';
import { AdminSettingsPageFormComponent } from './component/admin-settings-page-form.component';
import { adminSettingsPageStateKey } from './constants/admin-settings-page-form.constants';
import { AdminSettingsPageEffects } from './state/admin-settings-page-form.effects';
import { adminSettingsPageReducer } from './state/admin-settings-page-form.reducer';

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
  AdminSettingsPageFormRoutingModule,
  CoreModule,
  CaptchaModule,
  CkEditorFormComponent,
  GridLayoutModule,
  FormStepperModule,
  MediaModule,
  TitleModule,
];

const libs = [
  FontAwesomeModule,
  StoreModule.forFeature(adminSettingsPageStateKey, adminSettingsPageReducer),
  EffectsModule.forFeature([AdminSettingsPageEffects]),
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
