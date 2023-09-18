import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CoreModule } from 'src/app/core/core.module';
import { AnalyticsSearchComponent } from 'src/app/shared/widgets/analytics/components/search/analytics-search.component';
import { AdminSettingsPageDetailsSearchComponent } from './component/admin-settings-page-details-search.component';
import { adminSettingsPageDetailsSearchStateKey } from './constants/admin-settings-page-details-search.constants';
import { AdminSettingsPageDetailsSearchEffects } from './state/admin-settings-page-details-search.effects';
import { adminSettingsPageDetailsSearchReducer } from './state/admin-settings-page-details-search.reducer';

const components = [
  AdminSettingsPageDetailsSearchComponent,
]

const framework = [
  CommonModule,
];

const modules = [
  AnalyticsSearchComponent,
  CoreModule,
];

const libs = [
  StoreModule.forFeature(adminSettingsPageDetailsSearchStateKey, adminSettingsPageDetailsSearchReducer),
  EffectsModule.forFeature([AdminSettingsPageDetailsSearchEffects]),
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
export class AdminSettingsPageDetailsSearchModule { }
