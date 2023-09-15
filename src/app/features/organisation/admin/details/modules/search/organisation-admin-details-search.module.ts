import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CoreModule } from 'src/app/core/core.module';
import { AnalyticsSearchComponent } from 'src/app/shared/widgets/analytics/components/search/analytics-search.component';
import { OrganisationAdminDetailsSearchComponent } from './component/organisation-admin-details-search.component';
import { organisationAdminDetailsSearchStateKey } from './constants/organisation-admin-details-search.constants';
import { OrganisationAdminDetailsSearchEffects } from './state/organisation-admin-details-search.effects';
import { organisationAdminDetailsSearchReducer } from './state/organisation-admin-details-search.reducer';

const components = [
  OrganisationAdminDetailsSearchComponent,
]

const framework = [
  CommonModule,
];

const modules = [
  AnalyticsSearchComponent,
  CoreModule,
];

const libs = [
  StoreModule.forFeature(organisationAdminDetailsSearchStateKey, organisationAdminDetailsSearchReducer),
  EffectsModule.forFeature([OrganisationAdminDetailsSearchEffects]),
];

@NgModule({
  declarations: [...components],
  imports: [
    ...framework,
    ...libs,
    ...modules,
  ],
  exports: [...components],
})
export class OrganisationAdminDetailsSearchModule { }
