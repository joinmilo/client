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
import { CoreModule } from 'src/app/core/core.module';
import { AddressFormModule } from 'src/app/shared/form/address/address-form.module';
import { ContactFormComponent } from 'src/app/shared/form/contact/contact-form.component';
import { IconFormComponent } from 'src/app/shared/form/icon/icon-form.component';
import { SchedulerModule } from 'src/app/shared/form/scheduler/scheduler.module';
import { FormStepperModule } from 'src/app/shared/form/stepper/form-stepper.module';
import { GridLayoutModule } from 'src/app/shared/layout/grid-layout/grid-layout.module';
import { TitleModule } from 'src/app/shared/layout/title/title.module';
import { MediaFormModule } from 'src/app/shared/media/modules/form/media-form.module';
import { MediaWidgetsModule } from 'src/app/shared/media/modules/widgets/media-widgets.module';
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
  CoreModule,
  EventAdminFormRoutingModule,
  FormStepperModule,
  GridLayoutModule,
  IconFormComponent,
  MediaFormModule,
  MediaWidgetsModule,
  SchedulerModule,
  TitleModule,
  ContactFormComponent
];

const libs = [
  StoreModule.forFeature(eventAdminFormStateKey, eventAdminFormReducer),
  EffectsModule.forFeature([EventAdminFormEffects]),

  RichtextEditorFormComponent,
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
