import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CoreModule } from 'src/app/core/core.module';
import { TitleModule } from 'src/app/shared/layout/title/title.module';
import { TableModule } from 'src/app/shared/widgets/table/table.module';
import { AdminSettingsAddressRoutingModule } from './admin-settings-address-routing.module';
import { AdminSettingsAddressComponent } from './component/admin-settings-address.component';
import { adminSettingsAddressStateKey } from './constants/admin-settings-address.constants';
import { AdminSettingsAddressEffects } from './state/admin-settings-address.effects';
import { adminSettingsAddressReducer } from './state/admin-settings-address.reducer';

const components = [
  AdminSettingsAddressComponent
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
  AdminSettingsAddressRoutingModule,
  TableModule,
  TitleModule,
];

const libs = [
  StoreModule.forFeature(adminSettingsAddressStateKey, adminSettingsAddressReducer),
  EffectsModule.forFeature([AdminSettingsAddressEffects]),
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
export class AdminSettingsAddressModule { }
