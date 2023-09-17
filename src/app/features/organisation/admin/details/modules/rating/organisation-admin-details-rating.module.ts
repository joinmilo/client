import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CoreModule } from 'src/app/core/core.module';
import { AnalyticsRatingComponent } from 'src/app/shared/widgets/analytics/components/rating/analytics-rating.component';
import { OrganisationAdminDetailsRatingComponent } from './component/organisation-admin-details-rating.component';
import { organisationAdminDetailsRatingStateKey } from './constants/organisation-admin-details-rating.constants';
import { OrganisationAdminDetailsRatingEffects } from './state/organisation-admin-details-rating.effects';
import { organisationAdminDetailsRatingReducer } from './state/organisation-admin-details-rating.reducer';

const components = [
  OrganisationAdminDetailsRatingComponent,
];

const framework = [
  CommonModule,
];

const modules = [
  CoreModule,
  AnalyticsRatingComponent,
];

const libs = [
  StoreModule.forFeature(organisationAdminDetailsRatingStateKey, organisationAdminDetailsRatingReducer),
  EffectsModule.forFeature([OrganisationAdminDetailsRatingEffects]),
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
export class OrganisationAdminDetailsRatingModule { }
