import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CoreModule } from 'src/app/core/core.module';
import { FormStepperModule } from 'src/app/shared/form/stepper/form-stepper.module';
import { GridLayoutModule } from 'src/app/shared/layout/grid-layout/grid-layout.module';
import { TitleModule } from 'src/app/shared/layout/title/title.module';
import { EventAdminTargetGroupFormComponent } from './components/event-admin-target-group-form.component';
import { eventAdminTargetGroupFormStateKey } from './constants/event-admin-target-group-form.constants';
import { EventAdminTargetGroupFormRoutingModule } from './event-admin-target-group-form-routing.module';
import { EventAdminTargetGroupFormEffects } from './state/event-admin-target-group-form.effects';
import { eventAdminFormReducer } from './state/event-admin-target-group-form.reducer';


const components = [
  EventAdminTargetGroupFormComponent
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
  EventAdminTargetGroupFormRoutingModule,
  TitleModule,
  FormStepperModule,
  GridLayoutModule,
];

const libs = [
  StoreModule.forFeature(eventAdminTargetGroupFormStateKey, eventAdminFormReducer),
  EffectsModule.forFeature([EventAdminTargetGroupFormEffects]),
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
export class EventAdminTargetGroupFormModule { }
