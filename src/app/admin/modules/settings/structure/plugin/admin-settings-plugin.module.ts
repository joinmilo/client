import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CoreModule } from 'src/app/core/core.module';
import { TitleModule } from 'src/app/shared/layout/title/title.module';
import { TableModule } from 'src/app/shared/widgets/table/table.module';
import { AdminSettingsPluginRoutingModule } from './admin-settings-plugin-routing.module';
import { AdminSettingsPluginComponent } from './component/admin-settings-plugin.component';
import { adminSettingsPluginStateKey } from './constants/admin-settings-plugin.constants';
import { AdminSettingsPluginEffects } from './state/admin-settings-plugin.effects';
import { adminSettingsPluginReducer } from './state/admin-settings-plugin.reducer';

const components = [
  AdminSettingsPluginComponent
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
  AdminSettingsPluginRoutingModule,
  TableModule,
  TitleModule,
];

const libs = [
  StoreModule.forFeature(adminSettingsPluginStateKey, adminSettingsPluginReducer),
  EffectsModule.forFeature([AdminSettingsPluginEffects]),
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
export class AdminSettingsPluginModule { }
