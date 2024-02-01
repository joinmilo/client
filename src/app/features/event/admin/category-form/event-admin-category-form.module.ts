import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { IconFormComponent } from 'ngx-cinlib/icons';
import { CoreModule } from 'src/app/core/core.module';
import { FormStepperModule } from 'src/app/shared/form/stepper/form-stepper.module';
import { GridLayoutModule } from 'src/app/shared/layout/grid-layout/grid-layout.module';
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
  FormStepperModule,
  GridLayoutModule,
];

const libs = [
  IconFormComponent,
  EffectsModule.forFeature([EventAdminCategoryFormEffects]),
  StoreModule.forFeature(eventAdminCategoryFormStateKey, eventAdminFormReducer),
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
