import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CoreModule } from 'src/app/core/core.module';
import { TitleModule } from 'src/app/shared/layout/title/title.module';
import { TableModule } from 'src/app/shared/widgets/table/table.module';
import { AdminSettingsFeatureRoutingModule } from './admin-settings-feature-routing.module';
import { AdminSettingsFeatureComponent } from './component/admin-settings-feature.component';
import { adminSettingsFeatureStateKey } from './constants/admin-settings-feature.constants';
import { AdminSettingsFeatureEffects } from './state/admin-settings-feature.effects';
import { adminSettingsFeatureReducer } from './state/admin-settings-feature.reducer';

const components = [
  AdminSettingsFeatureComponent
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
  AdminSettingsFeatureRoutingModule,
  TableModule,
  TitleModule,
];

const libs = [
  StoreModule.forFeature(adminSettingsFeatureStateKey, adminSettingsFeatureReducer),
  EffectsModule.forFeature([AdminSettingsFeatureEffects]),
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
export class AdminSettingsFeatureModule { }
