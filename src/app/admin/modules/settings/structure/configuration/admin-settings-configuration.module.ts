import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CoreModule } from 'src/app/core/core.module';
import { TitleModule } from 'src/app/shared/layout/title/title.module';
import { TableModule } from 'src/app/shared/widgets/table/table.module';
import { AdminSettingsConfigurationRoutingModule } from './admin-settings-configuration-routing.module';
import { AdminSettingsConfigurationComponent } from './component/admin-settings-configuration.component';
import { adminSettingsConfigurationStateKey } from './constants/admin-settings-configuration.constants';
import { AdminSettingsConfigurationEffects } from './state/admin-settings-configuration.effects';
import { adminSettingsConfigurationReducer } from './state/admin-settings-configuration.reducer';

const components = [
  AdminSettingsConfigurationComponent
]

const framework = [
  CommonModule,
];

const materials = [
  MatButtonModule,
];

const modules = [
  CoreModule,
  AdminSettingsConfigurationRoutingModule,
  TableModule,
  TitleModule,
];

const libs = [
  StoreModule.forFeature(adminSettingsConfigurationStateKey, adminSettingsConfigurationReducer),
  EffectsModule.forFeature([AdminSettingsConfigurationEffects]),
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
export class AdminSettingsConfigurationModule { }
