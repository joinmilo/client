import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CoreModule } from 'src/app/core/core.module';
import { AnalyticsSearchComponent } from 'src/app/shared/widgets/analytics/components/search/analytics-search.component';
import { DealAdminDetailsSearchComponent } from './component/deal-admin-details-search.component';
import { dealAdminDetailsSearchStateKey } from './constants/deal-admin-details-search.constants';
import { DealAdminDetailsSearchEffects } from './state/deal-admin-details-search.effects';
import { dealAdminDetailsSearchReducer } from './state/deal-admin-details-search.reducer';

const components = [
  DealAdminDetailsSearchComponent,
]

const framework = [
  CommonModule,
];

const modules = [
  AnalyticsSearchComponent,
  CoreModule,
];

const libs = [
  StoreModule.forFeature(dealAdminDetailsSearchStateKey, dealAdminDetailsSearchReducer),
  EffectsModule.forFeature([DealAdminDetailsSearchEffects]),
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
export class DealAdminDetailsSearchModule { }
