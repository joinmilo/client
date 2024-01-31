import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CoreModule } from 'src/app/core/core.module';
import { TableModule } from 'src/app/shared/widgets/table/table.module';
import { OrganisationAdminDetailsApplicationsComponent } from './components/organisation-admin-details-applications.component';
import { organisationAdminDetailsApplicationsStateKey } from './constants/organisation-admin-details-applications.constants';
import { OrganisationAdminDetailsApplicationsEffects } from './state/organisation-admin-details-applications.effects';
import { organisationAdminDetailsApplicationsReducer } from './state/organisation-admin-details-applications.reducer';

const components = [
  OrganisationAdminDetailsApplicationsComponent,
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
  StoreModule.forFeature(organisationAdminDetailsApplicationsStateKey, organisationAdminDetailsApplicationsReducer),
  EffectsModule.forFeature([OrganisationAdminDetailsApplicationsEffects]),
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
export class OrganisationAdminDetailsApplicationsModule { }
