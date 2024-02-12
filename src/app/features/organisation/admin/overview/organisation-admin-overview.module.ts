import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { I18nDirective } from 'ngx-cinlib/i18n';
import { PageTitleComponent } from 'ngx-cinlib/layouts/title';
import { TableComponent } from 'ngx-cinlib/tables';
import { CoreModule } from 'src/app/core/core.module';
import { OrganisationFilterModule } from 'src/app/shared/filter/organisation/organisation-filter.module';
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
];

const libs = [
  StoreModule.forFeature(organisationAdminOverviewStateKey, organisationAdminOverviewReducer),
  EffectsModule.forFeature([OrganisationAdminOverviewEffects]),

  I18nDirective,
  PageTitleComponent,
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
export class OrganisationAdminOverviewModule { }
