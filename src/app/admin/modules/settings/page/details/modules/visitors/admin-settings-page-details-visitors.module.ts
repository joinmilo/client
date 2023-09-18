import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CoreModule } from 'src/app/core/core.module';
import { AnalyticsVisitorsComponent } from 'src/app/shared/widgets/analytics/components/visitors/analytics-visitors.component';
import { AdminSettingsPageDetailsVisitorsComponent } from './component/admin-settings-page-details-visitors.component';
import { adminSettingsPageDetailsVisitorsStateKey } from './constants/admin-settings-page-details-visitors.constants';
import { AdminSettingsPageDetailsVisitorsEffects } from './state/admin-settings-page-details-visitors.effects';
import { adminSettingsPageDetailsVisitorsReducer } from './state/admin-settings-page-details-visitors.reducer';

const components = [
  AdminSettingsPageDetailsVisitorsComponent,
]

const framework = [
  CommonModule,
];

const modules = [
  CoreModule,
  AnalyticsVisitorsComponent,
];

const libs = [
  StoreModule.forFeature(adminSettingsPageDetailsVisitorsStateKey, adminSettingsPageDetailsVisitorsReducer),
  EffectsModule.forFeature([AdminSettingsPageDetailsVisitorsEffects]),
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
export class AdminSettingsPageDetailsVisitorsModule { }
