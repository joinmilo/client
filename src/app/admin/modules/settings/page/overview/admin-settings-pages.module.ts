import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CoreModule } from 'src/app/core/core.module';
import { TitleModule } from 'src/app/shared/layout/title/title.module';
import { TableModule } from 'src/app/shared/widgets/table/table.module';
import { AdminSettingsPagesRoutingModule } from './admin-settings-pages-routing.module';
import { AdminSettingsPagesOverviewComponent } from './component/admin-settings-pages-overview.component';
import { adminSettingsPageStateKey } from './constants/admin-settings-pages.constants';
import { AdminSettingsPageEffects } from './state/admin-settings-pages.effects';
import { adminSettingsPageReducer } from './state/admin-settings-pages.reducer';


const components = [
  AdminSettingsPagesOverviewComponent
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
  AdminSettingsPagesRoutingModule,
  TableModule,
  TitleModule,
];

const libs = [
  StoreModule.forFeature(adminSettingsPageStateKey, adminSettingsPageReducer),
  EffectsModule.forFeature([AdminSettingsPageEffects]),
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
export class AdminSettingsPagesModule { }
