import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { PageTitleComponent } from 'ngx-cinlib/layouts/title';
import { TableComponent } from 'ngx-cinlib/tables';
import { CoreModule } from 'src/app/core/core.module';
import { AdminSettingsLanguageRoutingModule } from './admin-settings-language-routing.module';
import { AdminSettingsLanguageComponent } from './component/admin-settings-language.component';
import { adminSettingsLanguageStateKey } from './constants/admin-settings-language.constants';
import { AdminSettingsLanguageEffects } from './state/admin-settings-language.effects';
import { adminSettingsLanguageReducer } from './state/admin-settings-language.reducer';

const components = [
  AdminSettingsLanguageComponent
]

const framework = [
  CommonModule,
];

const materials = [
  MatButtonModule,
];

const modules = [
  CoreModule,
  AdminSettingsLanguageRoutingModule,
];

const libs = [
  StoreModule.forFeature(adminSettingsLanguageStateKey, adminSettingsLanguageReducer),
  EffectsModule.forFeature([AdminSettingsLanguageEffects]),

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
export class AdminSettingsLanguageModule { }
