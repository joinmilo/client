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
import { AdminSettingsPluginFormRoutingModule } from './admin-settings-plugin-form-routing.module';
import { AdminSettingsPluginFormComponent } from './component/admin-settings-plugin-form.component';
import { adminSettingsPluginFormStateKey } from './constants/admin-settings-plugin-form.constants';
import { AdminSettingsPluginFormEffects } from './state/admin-settings-plugin-form.effects';
import { adminSettingsPluginFormReducer } from './state/admin-settings-plugin-form.reducer';


const components = [
  AdminSettingsPluginFormComponent,
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
  AdminSettingsPluginFormRoutingModule,
];

const libs = [
  StoreModule.forFeature(adminSettingsPluginFormStateKey, adminSettingsPluginFormReducer),
  EffectsModule.forFeature([AdminSettingsPluginFormEffects]),

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
export class AdminSettingsPluginFormModule { }
