import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CoreModule } from 'src/app/core/core.module';
import { DealFilterModule } from 'src/app/shared/filter/deal/deal-filter.module';
import { CkEditorFormComponent } from 'src/app/shared/form/ck-editor/ck-editor-form.component';
import { FormStepperModule } from 'src/app/shared/form/stepper/form-stepper.module';
import { GridLayoutModule } from 'src/app/shared/layout/grid-layout/grid-layout.module';
import { TitleModule } from 'src/app/shared/layout/title/title.module';
import { MediaModule } from 'src/app/shared/media/media.module';
import { DealAdminFormComponent } from './component/deal-admin-form.component';
import { dealAdminFormStateKey } from './constants/deal-admin-form.constants';
import { DealAdminFormRoutingModule } from './deal-admin-form-routing.module';
import { DealAdminFormEffects } from './state/deal-portal-form.effects';
import { dealAdminFormReducer } from './state/deal-portal-form.reducer';

const components = [
  DealAdminFormComponent
]

const framework = [
  CommonModule,
];

const materials = [
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatSlideToggleModule,
  MatSelectModule,
  FormsModule,
  MatRadioModule,
  ReactiveFormsModule,
];

const modules = [
  CoreModule,
  DealFilterModule,
  DealAdminFormRoutingModule,
  TitleModule,
  FormStepperModule,
  GridLayoutModule,
  CkEditorFormComponent,
  MediaModule
];

const libs = [
  StoreModule.forFeature(dealAdminFormStateKey, dealAdminFormReducer),
  EffectsModule.forFeature([DealAdminFormEffects]),
];

@NgModule({
  declarations: [...components],
  imports: [
    ...framework,
    ...libs,
    ...materials,
    ...modules,
  ],
  exports: [...components],
})
export class DealAdminFormModule { }
