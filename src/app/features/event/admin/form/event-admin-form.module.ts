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
import { RichtextEditorFormComponent } from 'ngx-cinlib/forms/richtext';
import { SchedulerFormComponent } from 'ngx-cinlib/forms/scheduler';
import { FormStepComponent, FormStepperComponent } from 'ngx-cinlib/forms/stepper';
import { GridColumnDirective, GridRowComponent } from 'ngx-cinlib/layouts/grid-layout';
import { PageTitleComponent } from 'ngx-cinlib/layouts/title';
import { MediaFormComponent } from 'ngx-cinlib/media/forms';
import { CoreModule } from 'src/app/core/core.module';
import { AddressFormModule } from 'src/app/shared/form/address/address-form.module';
import { ContactFormComponent } from 'src/app/shared/form/contact/contact-form.component';
import { EventAdminFormComponent } from './components/event-admin-form.component';
import { eventAdminFormStateKey } from './constants/event-admin-form.constants';
import { EventAdminFormRoutingModule } from './event-admin-form-routing.module';
import { EventAdminFormEffects } from './state/event-admin-form.effects';
import { eventAdminFormReducer } from './state/event-admin-form.reducer';

const components = [
  EventAdminFormComponent,
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
  AddressFormModule,
  ContactFormComponent,
  CoreModule,
  EventAdminFormRoutingModule,
];

const libs = [
  StoreModule.forFeature(eventAdminFormStateKey, eventAdminFormReducer),
  EffectsModule.forFeature([EventAdminFormEffects]),

  FormStepperComponent,
  FormStepComponent,
  GridRowComponent,
  GridColumnDirective,
  MediaFormComponent,
  PageTitleComponent,
  RichtextEditorFormComponent,
  SchedulerFormComponent,
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
