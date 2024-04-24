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
import { ExtendedSearchDirective, FilterAreaComponent, FilterService } from 'ngx-cinlib/filters';
import { I18nDirective } from 'ngx-cinlib/i18n';
import { CoreModule } from 'src/app/core/core.module';
import { FreeSearchFilterComponent } from '../free-search/free-search-filter.component';
import { SuburbFilterModule } from '../suburb/suburb-filter.module';
import { OrganisationFilterActiveComponent } from './components/active/organisation-filter-active.component';
import { OrganisationFilterComponent } from './components/organisation-filter.component';

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
  FreeSearchFilterComponent,
  SuburbFilterModule,
];

const libs = [
  ExtendedSearchDirective,
  FilterAreaComponent,
  I18nDirective,
];

const providers = [
  FilterService,
]

@NgModule({
  declarations: [...components],
  imports: [
    ...framework,
    ...materials,
    ...modules,
    ...libs,
  ],
  exports: [...components],
  providers: [...providers],
})
export class OrganisationFilterModule { }