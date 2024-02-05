import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { FormStepComponent, FormStepperComponent } from 'ngx-cinlib/forms/stepper';
import { IconFormComponent } from 'ngx-cinlib/icons';
import { GridColumnDirective, GridRowComponent } from 'ngx-cinlib/layouts/grid-layout';
import { CoreModule } from 'src/app/core/core.module';
import { TitleModule } from 'src/app/shared/layout/title/title.module';
import { EventAdminCategoryFormComponent } from './components/event-admin-category-form.component';
import { eventAdminCategoryFormStateKey } from './constants/event-admin-category-form.constants';
import { EventAdminCategoryFormRoutingModule } from './event-admin-category-form-routing.module';
import { EventAdminCategoryFormEffects } from './state/event-admin-category-form.effects';
import { eventAdminFormReducer } from './state/event-admin-category-form.reducer';

const components = [
  EventAdminCategoryFormComponent
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
  EventAdminCategoryFormRoutingModule,
  TitleModule,
];

const libs = [
  EffectsModule.forFeature([EventAdminCategoryFormEffects]),
  StoreModule.forFeature(eventAdminCategoryFormStateKey, eventAdminFormReducer),

  FormStepComponent,
  FormStepperComponent,
  GridColumnDirective,
  GridRowComponent,
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
export class EventAdminCategoryFormModule { }
