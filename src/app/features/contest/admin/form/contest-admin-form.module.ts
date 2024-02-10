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
import { CoreModule } from 'src/app/core/core.module';
import { ContestFilterModule } from 'src/app/shared/filter/contest/contest-filter.module';
import { TableModule } from 'src/app/shared/widgets/table/table.module';
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
  CkEditorFormComponent,
  ContestFilterModule,
  ContestAdminFormRoutingModule,
  ContactFormComponent,
  CoreModule,
  DatetimeFormComponent,
  FormStepperModule,
  GridLayoutModule,
  MediaFormModule,
  TableModule,
];

const libs = [
  StoreModule.forFeature(contestAdminFormStateKey, contestAdminFormReducer),
  EffectsModule.forFeature([ContestAdminFormEffects]),
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
