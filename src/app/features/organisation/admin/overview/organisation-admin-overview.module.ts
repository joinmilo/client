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
import { OrganisationAdminOverviewComponent } from './component/organisation-admin-overview.component';
import { organisationAdminOverviewStateKey } from './constants/organisation-admin-overview.constants';
import { OrganisationAdminOverviewRoutingModule } from './organisation-admin-overview-routing.module';
import { OrganisationAdminOverviewEffects } from './state/organisation-admin-overview.effects';
import { organisationAdminOverviewReducer } from './state/organisation-admin-overview.reducer';

const components = [
  OrganisationAdminOverviewComponent
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
  OrganisationAdminOverviewRoutingModule,
  TableModule,
  TitleModule,
];

const libs = [
  StoreModule.forFeature(organisationAdminOverviewStateKey, organisationAdminOverviewReducer),
  EffectsModule.forFeature([OrganisationAdminOverviewEffects]),
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
export class OrganisationAdminOverviewModule { }
