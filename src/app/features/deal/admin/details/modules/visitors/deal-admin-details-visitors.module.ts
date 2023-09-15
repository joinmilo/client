import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CoreModule } from 'src/app/core/core.module';
import { AnalyticsVisitorsComponent } from 'src/app/shared/widgets/analytics/components/visitors/analytics-visitors.component';
import { DealAdminDetailsVisitorsComponent } from './component/deal-admin-details-visitors.component';
import { dealAdminDetailsVisitorsStateKey } from './constants/deal-admin-details-visitors.constants';
import { DealAdminDetailsVisitorsEffects } from './state/deal-admin-details-visitors.effects';
import { dealAdminDetailsVisitorsReducer } from './state/deal-admin-details-visitors.reducer';

const components = [
  DealAdminDetailsVisitorsComponent,
]

const framework = [
  CommonModule,
];

const modules = [
  CoreModule,
  AnalyticsVisitorsComponent,
];

const libs = [
  StoreModule.forFeature(dealAdminDetailsVisitorsStateKey, dealAdminDetailsVisitorsReducer),
  EffectsModule.forFeature([DealAdminDetailsVisitorsEffects]),
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
export class DealAdminDetailsVisitorsModule { }
