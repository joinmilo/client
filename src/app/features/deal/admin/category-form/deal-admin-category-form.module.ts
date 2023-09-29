import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CoreModule } from 'src/app/core/core.module';
import { IconFormComponent } from 'src/app/shared/form/icon/icon-form.component';
import { FormStepperModule } from 'src/app/shared/form/stepper/form-stepper.module';
import { GridLayoutModule } from 'src/app/shared/layout/grid-layout/grid-layout.module';
import { TitleModule } from 'src/app/shared/layout/title/title.module';
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
  TitleModule,
  FormStepperModule,
  GridLayoutModule,
  IconFormComponent
];

const libs = [
  StoreModule.forFeature(dealAdminCategoryFormStateKey, dealAdminFormReducer),
  EffectsModule.forFeature([DealAdminCategoryFormEffects]),
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
