import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CoreModule } from 'src/app/core/core.module';
import { AnalyticsSearchComponent } from 'src/app/shared/widgets/analytics/components/search/analytics-search.component';
import { ContestAdminDetailsSearchComponent } from './component/contest-admin-details-search.component';
import { contestAdminDetailsSearchStateKey } from './constants/contest-admin-details-search.constants';
import { ContestAdminDetailsSearchEffects } from './state/contest-admin-details-search.effects';
import { contestAdminDetailsSearchReducer } from './state/contest-admin-details-search.reducer';

const components = [
  ContestAdminDetailsSearchComponent,
]

const framework = [
  CommonModule,
];

const modules = [
  AnalyticsSearchComponent,
  CoreModule,
];

const libs = [
  StoreModule.forFeature(contestAdminDetailsSearchStateKey, contestAdminDetailsSearchReducer),
  EffectsModule.forFeature([ContestAdminDetailsSearchEffects]),
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
export class ContestAdminDetailsSearchModule { }
