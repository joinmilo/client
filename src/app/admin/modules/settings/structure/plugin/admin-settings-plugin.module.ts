import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { PageTitleComponent } from 'ngx-cinlib/layouts/title';
import { TableComponent } from 'ngx-cinlib/tables';
import { CoreModule } from 'src/app/core/core.module';
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
];

const libs = [
  StoreModule.forFeature(adminSettingsPluginStateKey, adminSettingsPluginReducer),
  EffectsModule.forFeature([AdminSettingsPluginEffects]),

  PageTitleComponent,
  TableComponent,
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
