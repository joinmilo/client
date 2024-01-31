import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CoreModule } from 'src/app/core/core.module';
import { TableModule } from 'src/app/shared/widgets/table/table.module';
import { OrganisationAdminDetailsMembersComponent } from './components/organisation-admin-details-members.component';
import { organisationAdminDetailsMembersStateKey } from './constants/organisation-admin-details-members.constants';
import { OrganisationAdminDetailsMembersEffects } from './state/organisation-admin-details-members.effects';
import { organisationAdminDetailsMembersReducer } from './state/organisation-admin-details-members.reducer';

const components = [
  OrganisationAdminDetailsMembersComponent,
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
  TableModule,
];

const libs = [
  StoreModule.forFeature(organisationAdminDetailsMembersStateKey, organisationAdminDetailsMembersReducer),
  EffectsModule.forFeature([OrganisationAdminDetailsMembersEffects]),
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
export class OrganisationAdminDetailsMembersModule { }
