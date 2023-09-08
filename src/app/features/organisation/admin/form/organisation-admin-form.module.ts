import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CoreModule } from 'src/app/core/core.module';
import { OrganisationFilterModule } from 'src/app/shared/filter/organisation/organisation-filter.module';
import { TitleModule } from 'src/app/shared/layout/title/title.module';
import { TableModule } from 'src/app/shared/widgets/table/table.module';
import { OrganisationAdminFormComponent } from './component/organisation-admin-form.component';
import { organisationAdminFormStateKey } from './constants/organisation-admin-form.constants';
import { OrganisationAdminFormRoutingModule } from './organisation-admin-form-routing.module';
import { OrganisationAdminFormEffects } from './state/organisation-portal-form.effects';
import { organisationAdminFormReducer } from './state/organisation-portal-form.reducer';

const components = [
  OrganisationAdminFormComponent
]

const framework = [
  CommonModule,
];

const materials = [
  MatButtonModule,
  MatCardModule,
];

const modules = [
  CoreModule,
  OrganisationFilterModule,
  OrganisationAdminFormRoutingModule,
  TableModule,
  TitleModule,
];

const libs = [
  StoreModule.forFeature(organisationAdminFormStateKey, organisationAdminFormReducer),
  EffectsModule.forFeature([OrganisationAdminFormEffects]),
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
export class OrganisationAdminFormModule { }
