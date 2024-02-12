import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { DatetimeFormComponent } from 'ngx-cinlib/date/datetime-form';
import { FormStepComponent, FormStepperComponent } from 'ngx-cinlib/forms/stepper';
import { I18nDirective, TranslatablePipe } from 'ngx-cinlib/i18n';
import { GridColumnDirective, GridRowComponent } from 'ngx-cinlib/layouts/grid-layout';
import { PageTitleComponent } from 'ngx-cinlib/layouts/title';
import { MediaFormComponent } from 'ngx-cinlib/media/forms';
import { CoreModule } from 'src/app/core/core.module';
import { ContestFilterModule } from 'src/app/shared/filter/contest/contest-filter.module';
import { ContestAdminFormComponent } from './component/contest-admin-form.component';
import { contestAdminFormStateKey } from './constants/contest-admin-form.constants';
import { ContestAdminFormRoutingModule } from './contest-admin-form-routing.module';
import { ContestAdminFormEffects } from './state/contest-admin-form.effects';
import { contestAdminFormReducer } from './state/contest-admin-form.reducer';

const components = [
  ContestAdminFormComponent
];

const framework = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
];

const materials = [
  MatFormFieldModule,
  MatInputModule,
  MatOptionModule,
  MatSelectModule,
  MatSlideToggleModule,
];

const modules = [
  ContestFilterModule,
  ContestAdminFormRoutingModule,
  CoreModule,
];

const libs = [
  StoreModule.forFeature(contestAdminFormStateKey, contestAdminFormReducer),
  EffectsModule.forFeature([ContestAdminFormEffects]),

  DatetimeFormComponent,
  FormStepComponent,
  FormStepperComponent,
  GridColumnDirective,
  GridRowComponent,
  I18nDirective,
  MediaFormComponent,
  PageTitleComponent,
  TranslatablePipe,
];

@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    ...framework,
    ...libs,
    ...materials,
    ...modules
  ],
  exports: [...components],
})
export class ContestAdminFormModule {}
