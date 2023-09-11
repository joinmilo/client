import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CoreModule } from 'src/app/core/core.module';
import { TitleModule } from 'src/app/shared/layout/title/title.module';
import { TableModule } from 'src/app/shared/widgets/table/table.module';
import { AdminSettingsRoleRoutingModule } from './admin-settings-role-routing.module';
import { AdminSettingsRoleComponent } from './component/admin-settings-role.component';
import { adminSettingsRoleStateKey } from './constants/admin-settings-role.constants';
import { AdminSettingsRoleEffects } from './state/admin-settings-role.effects';
import { adminSettingsRoleReducer } from './state/admin-settings-role.reducer';

const components = [
  AdminSettingsRoleComponent
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
  AdminSettingsRoleRoutingModule,
  TableModule,
  TitleModule,
];

const libs = [
  StoreModule.forFeature(adminSettingsRoleStateKey, adminSettingsRoleReducer),
  EffectsModule.forFeature([AdminSettingsRoleEffects]),
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
export class AdminSettingsRoleModule { }
