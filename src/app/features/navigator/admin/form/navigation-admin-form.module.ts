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
import { RichtextEditorFormComponent } from 'ngx-cinlib/forms/richtext';
import { FormStepComponent, FormStepperComponent } from 'ngx-cinlib/forms/stepper';
import { I18nDirective, TranslatablePipe } from 'ngx-cinlib/i18n';
import { GridColumnDirective, GridRowComponent } from 'ngx-cinlib/layouts/grid-layout';
import { PageTitleComponent } from 'ngx-cinlib/layouts/title';
import { MediaFormComponent } from 'ngx-cinlib/media/forms';
import { CoreModule } from 'src/app/core/core.module';
import { NavigationAdminRoutingModule } from '../navigation-admin-routing.module';
import { NavigationAdminFormComponent } from './component/navigation-admin-form.component';
import { dealAdminFormStateKey } from './constants/navigation-admin-form.constants';
import { DealAdminFormEffects } from './state/navigation-portal-form.effects';
import { dealAdminFormReducer } from './state/navigation-portal-form.reducer';

const components = [
  NavigationAdminFormComponent
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
  NavigationAdminRoutingModule,
];

const libs = [
  StoreModule.forFeature(dealAdminFormStateKey, dealAdminFormReducer),
  EffectsModule.forFeature([DealAdminFormEffects]),

  FormStepComponent,
  FormStepperComponent,
  GridColumnDirective,
  GridRowComponent,
  I18nDirective,
  MediaFormComponent,
  PageTitleComponent,
  RichtextEditorFormComponent,
  TranslatablePipe,
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
