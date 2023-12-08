import { NgxMatDatetimePickerModule, NgxMatNativeDateModule, NgxMatTimepickerModule } from '@angular-material-components/datetime-picker';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CoreModule } from 'src/app/core/core.module';
import { GridLayoutModule } from '../../layout/grid-layout/grid-layout.module';
import { DatetimeFormComponent } from '../datetime/datetime-form.component';
import { RadioButtonFormModule } from '../radio-button/radio-button-form.module';
import { SchedulerDatetimeComponent } from './components/datetime/scheduler-datetime.component';
import { SchedulerErrorsComponent } from './components/errors/scheduler-errors.component';
import { SchedulerExecuteComponent } from './components/execute/scheduler-execute.component';
import { SchedulerFormComponent } from './components/form/scheduler-form.component';
import { SchedulerGeneratedComponent } from './components/generated/scheduler-generated.component';
import { SchedulerOverviewComponent } from './components/overview/scheduler-overview.component';
import { SchedulerRecurrenceEndComponent } from './components/recurrence-end/scheduler-recurrence-end.component';
import { SchedulerRecurrenceIntervalComponent } from './components/recurrence-interval/scheduler-recurrence-interval.component';
import { SchedulerRecurrenceTypeComponent } from './components/recurrence-type/scheduler-recurrence-type.component';
import { schedulerStateKey } from './constants/scheduler.constants';
import { SchedulerEffects } from './state/scheduler.effects';
import { schedulerReducer } from './state/scheduler.reducer';

const components = [
  SchedulerDatetimeComponent,
  SchedulerErrorsComponent,
  SchedulerExecuteComponent,
  SchedulerFormComponent,
  SchedulerGeneratedComponent,
  SchedulerOverviewComponent,
  SchedulerRecurrenceEndComponent,
  SchedulerRecurrenceIntervalComponent,
  SchedulerRecurrenceTypeComponent,
];

const framework = [
  CommonModule,
  ReactiveFormsModule,
];

const materials = [
  MatButtonModule,
  MatDatepickerModule,
  MatDividerModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatSelectModule,
];

const modules = [
  CoreModule,
  DatetimeFormComponent,
  GridLayoutModule,
  RadioButtonFormModule,

];

const libs = [
  StoreModule.forFeature(schedulerStateKey, schedulerReducer),
  EffectsModule.forFeature([SchedulerEffects]),

  NgxMatDatetimePickerModule,
  NgxMatTimepickerModule,
  NgxMatNativeDateModule,
];

@NgModule({
  declarations: [
    ...components,
  ],
  imports: [
    ...framework,
    ...materials,
    ...modules,
    ...libs,
  ],
  exports: [
    ...components,
  ],
})
export class SchedulerModule { }