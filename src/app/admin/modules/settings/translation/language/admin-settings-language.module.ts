import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CoreModule } from 'src/app/core/core.module';
import { TitleModule } from 'src/app/shared/layout/title/title.module';
import { TableModule } from 'src/app/shared/widgets/table/table.module';
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
  MatCardModule,
];

const modules = [
  CoreModule,
  AdminSettingsLanguageRoutingModule,
  TableModule,
  TitleModule,
];

const libs = [
  StoreModule.forFeature(adminSettingsLanguageStateKey, adminSettingsLanguageReducer),
  EffectsModule.forFeature([AdminSettingsLanguageEffects]),
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
