import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { FilterAreaComponent } from 'ngx-cinlib/filters/filter-area';
import { CoreModule } from 'src/app/core/core.module';
import { SuburbFilterModule } from '../suburb/suburb-filter.module';
import { OrganisationFilterActiveComponent } from './components/active/organisation-filter-active.component';
import { OrganisationFilterComponent } from './components/organisation-filter.component';
import { organisationFilterStateKey } from './constants/organisation-filter.constants';
import { OrganisationFilterEffects } from './state/organisation-filter.effects';
import { organisationFilterReducer } from './state/organisation-filter.reducer';

const components = [
  OrganisationFilterComponent,
  OrganisationFilterActiveComponent,
];

const framework = [
  CommonModule,
  ReactiveFormsModule,
];

const materials = [
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatNativeDateModule,
  MatSelectModule,
];

const modules = [
  CoreModule,
  SuburbFilterModule,
];

const libs = [
  FilterAreaComponent,
  EffectsModule.forFeature([OrganisationFilterEffects]),
  StoreModule.forFeature(organisationFilterStateKey, organisationFilterReducer),
];

@NgModule({
  declarations: [...components],
  imports: [
    ...framework,
    ...materials,
    ...modules,
    ...libs,
  ],
  exports: [...components],
})
export class OrganisationFilterModule { }