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
import { FormStepComponent, FormStepperComponent } from 'ngx-cinlib/forms/stepper';
import { I18nDirective, TranslatablePipe } from 'ngx-cinlib/i18n';
import { IconComponent, IconFormComponent } from 'ngx-cinlib/icons';
import { DragDropContainerComponent, DragDropElementComponent } from 'ngx-cinlib/layouts/drag-drop';
import { GridColumnDirective, GridRowComponent } from 'ngx-cinlib/layouts/grid-layout';
import { PageTitleComponent } from 'ngx-cinlib/layouts/title';
import { TableComponent } from 'ngx-cinlib/tables';
import { CoreModule } from 'src/app/core/core.module';
import { AdminSettingsPluginOverviewRoutingModule } from './admin-settings-plugin-overview-routing.module';
import { AdminSettingsPluginOverviewComponent } from './component/admin-settings-plugin-overview.component';
import { adminSettingsPluginOverviewStateKey } from './constants/admin-settings-plugin-overview.constants';
import { AdminSettingsPluginOverviewEffects } from './state/admin-settings-plugin-overview.effects';
import { adminSettingsPluginOverviewReducer } from './state/admin-settings-plugin-overview.reducer';

const components = [
  AdminSettingsPluginOverviewComponent,
];

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
  AdminSettingsPluginOverviewRoutingModule,
];

const libs = [
  StoreModule.forFeature(adminSettingsPluginOverviewStateKey, adminSettingsPluginOverviewReducer),
  EffectsModule.forFeature([AdminSettingsPluginOverviewEffects]),

  DragDropContainerComponent,
  DragDropElementComponent,
  GridColumnDirective,
  GridRowComponent,
  FormStepComponent,
  FormStepperComponent,
  IconComponent,
  IconFormComponent,
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
export class AdminSettingsPluginOverviewModule { }
