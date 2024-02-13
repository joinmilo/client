import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { I18nDirective, TranslatablePipe } from 'ngx-cinlib/i18n';
import { PageTitleComponent } from 'ngx-cinlib/layouts/title';
import { TableComponent } from 'ngx-cinlib/tables';
import { CoreModule } from 'src/app/core/core.module';
import { AdminSettingsPluginRoutingModule } from './admin-settings-plugin-routing.module';
import { AdminSettingsPluginMenuAssignComponent } from './components/menu-assign/admin-settings-plugin-menu-assign.component';
import { AdminSettingsPluginOverviewComponent } from './components/overview/admin-settings-plugin-overview.component';
import { adminSettingsPluginStateKey } from './constants/admin-settings-plugin.constants';
import { AdminSettingsPluginEffects } from './state/admin-settings-plugin.effects';
import { adminSettingsPluginReducer } from './state/admin-settings-plugin.reducer';

const components = [
  AdminSettingsPluginOverviewComponent,
  AdminSettingsPluginMenuAssignComponent,
]

const framework = [
  CommonModule,
  ReactiveFormsModule,
];

const materials = [
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatDividerModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
];

const modules = [
  CoreModule,
  AdminSettingsPluginRoutingModule,
];

const libs = [
  StoreModule.forFeature(adminSettingsPluginStateKey, adminSettingsPluginReducer),
  EffectsModule.forFeature([AdminSettingsPluginEffects]),

  I18nDirective,
  PageTitleComponent,
  TableComponent,
  TranslatablePipe,
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
export class AdminSettingsPluginModule { }
