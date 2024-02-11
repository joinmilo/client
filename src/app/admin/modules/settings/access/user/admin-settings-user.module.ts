import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { PageTitleComponent } from 'ngx-cinlib/layouts/title';
import { TableComponent } from 'ngx-cinlib/tables';
import { CoreModule } from 'src/app/core/core.module';
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
];

const libs = [
  StoreModule.forFeature(adminSettingsUserStateKey, adminSettingsUserReducer),
  EffectsModule.forFeature([AdminSettingsUserEffects]),

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
export class AdminSettingsUserModule { }
