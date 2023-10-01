import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatOptionModule } from '@angular/material/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CoreModule } from 'src/app/core/core.module';
import { AddressFormModule } from 'src/app/shared/form/address/address-form.module';
import { CkEditorFormComponent } from 'src/app/shared/form/ck-editor/ck-editor-form.component';
import { IconFormComponent } from 'src/app/shared/form/icon/icon-form.component';
import { SchedulerModule } from 'src/app/shared/form/scheduler/scheduler.module';
import { FormStepperModule } from 'src/app/shared/form/stepper/form-stepper.module';
import { GridLayoutModule } from 'src/app/shared/layout/grid-layout/grid-layout.module';
import { TitleModule } from 'src/app/shared/layout/title/title.module';
import { MediaModule } from 'src/app/shared/media/media.module';
import { EventAdminFormComponent } from './components/event-admin-form.component';
import { EventContactFormComponent } from './components/event-contact-form/event-contact-form.component';
import { eventAdminFormStateKey } from './constants/event-admin-form.constants';
import { EventAdminFormRoutingModule } from './event-admin-form-routing.module';
import { EventAdminFormEffects } from './state/event-admin-form.effects';
import { eventAdminFormReducer } from './state/event-admin-form.reducer';

const components = [
  EventAdminFormComponent,
  EventContactFormComponent
]

const framework = [
  CommonModule,
  ReactiveFormsModule,
  FormsModule,
];

const materials = [
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatOptionModule,
  MatSlideToggleModule,
  MatDividerModule
]

const modules = [
  CoreModule,
  EventAdminFormRoutingModule,
  FormStepperModule,
  GridLayoutModule,
  SchedulerModule,
  TitleModule,
  IconFormComponent,
  CkEditorFormComponent,
  AddressFormModule,
  MediaModule
];

const libs = [
  StoreModule.forFeature(eventAdminFormStateKey, eventAdminFormReducer),
  EffectsModule.forFeature([EventAdminFormEffects]),
];

@NgModule({
  declarations: [...components],
  imports: [
    ...materials,
    ...modules,
    ...framework,
    ...libs,
  ],
  exports: [...components],
})
export class EventAdminFormModule { }
