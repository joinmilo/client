import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CoreModule } from 'src/app/core/core.module';
import { TitleModule } from 'src/app/shared/layout/title/title.module';
import { TableModule } from 'src/app/shared/widgets/table/table.module';
import { AdminSettingsSuburbRoutingModule } from './admin-settings-suburb-routing.module';
import { AdminSettingsSuburbComponent } from './component/admin-settings-suburb.component';
import { adminSettingsSuburbStateKey } from './constants/admin-settings-suburb.constants';
import { AdminSettingsSuburbEffects } from './state/admin-settings-suburb.effects';
import { adminSettingsSuburbReducer } from './state/admin-settings-suburb.reducer';

const components = [
  AdminSettingsSuburbComponent
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
  AdminSettingsSuburbRoutingModule,
  TableModule,
  TitleModule,
];

const libs = [
  StoreModule.forFeature(adminSettingsSuburbStateKey, adminSettingsSuburbReducer),
  EffectsModule.forFeature([AdminSettingsSuburbEffects]),
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
export class AdminSettingsSuburbModule { }
