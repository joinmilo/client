import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { FormStepComponent, FormStepperComponent } from 'ngx-cinlib/forms/stepper';
import { I18nDirective } from 'ngx-cinlib/i18n';
import { IconFormComponent } from 'ngx-cinlib/icons';
import { GridColumnDirective, GridRowComponent } from 'ngx-cinlib/layouts/grid-layout';
import { PageTitleComponent } from 'ngx-cinlib/layouts/title';
import { CoreModule } from 'src/app/core/core.module';
import { DealAdminCategoryFormComponent } from './components/deal-admin-category-form.component';
import { dealAdminCategoryFormStateKey } from './constants/deal-admin-category-form.constants';
import { DealAdminCategoryFormRoutingModule } from './deal-admin-category-form-routing.module';
import { DealAdminCategoryFormEffects } from './state/deal-admin-category-form.effects';
import { dealAdminFormReducer } from './state/deal-admin-category-form.reducer';


const components = [
  DealAdminCategoryFormComponent
]

const framework = [
  CommonModule,
];

const materials = [
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
];

const modules = [
  CoreModule,
  DealAdminCategoryFormRoutingModule,
];

const libs = [
  EffectsModule.forFeature([DealAdminCategoryFormEffects]),
  StoreModule.forFeature(dealAdminCategoryFormStateKey, dealAdminFormReducer),

  FormStepComponent,
  FormStepperComponent,
  GridColumnDirective,
  GridRowComponent,
  I18nDirective,
  PageTitleComponent,
  IconFormComponent,
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
export class DealAdminCategoryFormModule { }
