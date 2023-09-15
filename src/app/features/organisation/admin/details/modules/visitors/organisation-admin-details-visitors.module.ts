import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CoreModule } from 'src/app/core/core.module';
import { AnalyticsVisitorsComponent } from 'src/app/shared/widgets/analytics/components/visitors/analytics-visitors.component';
import { OrganisationAdminDetailsVisitorsComponent } from './component/organisation-admin-details-visitors.component';
import { organisationAdminDetailsVisitorsStateKey } from './constants/organisation-admin-details-visitors.constants';
import { OrganisationAdminDetailsVisitorsEffects } from './state/organisation-admin-details-visitors.effects';
import { organisationAdminDetailsVisitorsReducer } from './state/organisation-admin-details-visitors.reducer';

const components = [
  OrganisationAdminDetailsVisitorsComponent,
]

const framework = [
  CommonModule,
];

const modules = [
  CoreModule,
  AnalyticsVisitorsComponent,
];

const libs = [
  StoreModule.forFeature(organisationAdminDetailsVisitorsStateKey, organisationAdminDetailsVisitorsReducer),
  EffectsModule.forFeature([OrganisationAdminDetailsVisitorsEffects]),
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
export class OrganisationAdminDetailsVisitorsModule { }
