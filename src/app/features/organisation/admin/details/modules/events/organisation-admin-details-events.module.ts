import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { TableComponent } from 'ngx-cinlib/tables';
import { CoreModule } from 'src/app/core/core.module';
import { OrganisationAdminDetailsEventsComponent } from './components/organisation-admin-details-events.component';
import { organisationAdminDetailsEventsStateKey } from './constants/organisation-admin-details-events.constants';
import { OrganisationAdminDetailsEventsEffects } from './state/organisation-admin-details-events.effects';
import { organisationAdminDetailsEventsReducer } from './state/organisation-admin-details-events.reducer';

const components = [
  OrganisationAdminDetailsEventsComponent,
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
];

const libs = [
  StoreModule.forFeature(organisationAdminDetailsEventsStateKey, organisationAdminDetailsEventsReducer),
  EffectsModule.forFeature([OrganisationAdminDetailsEventsEffects]),

  TableComponent,
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
export class OrganisationAdminDetailsEventsModule { }
