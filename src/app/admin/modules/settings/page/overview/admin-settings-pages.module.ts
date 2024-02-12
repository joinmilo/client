import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { I18nDirective } from 'ngx-cinlib/i18n';
import { PageTitleComponent } from 'ngx-cinlib/layouts/title';
import { TableComponent } from 'ngx-cinlib/tables';
import { CoreModule } from 'src/app/core/core.module';
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
];

const libs = [
  StoreModule.forFeature(adminSettingsPageStateKey, adminSettingsPageReducer),
  EffectsModule.forFeature([AdminSettingsPageEffects]),

  PageTitleComponent,
  TableComponent,
  I18nDirective,
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
