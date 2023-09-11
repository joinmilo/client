import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CoreModule } from 'src/app/core/core.module';
import { TitleModule } from 'src/app/shared/layout/title/title.module';
import { TableModule } from 'src/app/shared/widgets/table/table.module';
import { AdminSettingsUserRoutingModule } from './admin-settings-user-routing.module';
import { AdminSettingsUserComponent } from './component/admin-settings-user.component';
import { adminSettingsUserStateKey } from './constants/admin-settings-user.constants';
import { AdminSettingsUserEffects } from './state/admin-settings-user.effects';
import { adminSettingsUserReducer } from './state/admin-settings-user.reducer';

const components = [
  AdminSettingsUserComponent
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
  AdminSettingsUserRoutingModule,
  TableModule,
  TitleModule,
];

const libs = [
  StoreModule.forFeature(adminSettingsUserStateKey, adminSettingsUserReducer),
  EffectsModule.forFeature([AdminSettingsUserEffects]),
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
export class AdminSettingsUserModule { }
