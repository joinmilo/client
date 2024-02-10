import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { PageTitleComponent } from 'ngx-cinlib/layouts/title';
import { CoreModule } from 'src/app/core/core.module';
import { TableModule } from 'src/app/shared/widgets/table/table.module';
import { AdminSettingsLabelRoutingModule } from './admin-settings-label-routing.module';
import { AdminSettingsLabelComponent } from './component/admin-settings-label.component';
import { adminSettingsLabelStateKey } from './constants/admin-settings-label.constants';
import { AdminSettingsLabelEffects } from './state/admin-settings-label.effects';
import { adminSettingsLabelReducer } from './state/admin-settings-label.reducer';

const components = [
  AdminSettingsLabelComponent
]

const framework = [
  CommonModule,
];

const materials = [
  MatButtonModule,
];

const modules = [
  CoreModule,
  AdminSettingsLabelRoutingModule,
  TableModule,
];

const libs = [
  StoreModule.forFeature(adminSettingsLabelStateKey, adminSettingsLabelReducer),
  EffectsModule.forFeature([AdminSettingsLabelEffects]),

  PageTitleComponent,
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
export class AdminSettingsLabelModule { }
