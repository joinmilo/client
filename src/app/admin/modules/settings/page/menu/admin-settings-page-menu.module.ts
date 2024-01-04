
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CoreModule } from 'src/app/core/core.module';
import { DragAndDropModule } from 'src/app/shared/layout/drag-drop/drag-drop.module';
import { AdminSettingsPageMenuComponent } from './components/admin-settings-page-menu.component';
import { AdminSettingsPageMenuDialogComponent } from './components/dialog/admin-settings-page-menu-dialog.component';
import { AdminSettingsPageEmbeddingFormComponent } from './components/form/admin-settings-page-embedding-form.component';
import { adminSettingsPageMenuStateKey } from './constants/admin-settings-page-menu.constants';
import { AdminSettingsPageMenuEffects } from './state/admin-settings-page-menu.effects';
import { adminSettingsPageMenuReducer } from './state/admin-settings-page-menu.reducer';

const components = [
  AdminSettingsPageMenuComponent,
  AdminSettingsPageMenuDialogComponent,
  AdminSettingsPageEmbeddingFormComponent,
];

const framework = [
  CommonModule,
  ReactiveFormsModule,
  FormsModule,
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
  DragAndDropModule,
];

const libs = [
  StoreModule.forFeature(adminSettingsPageMenuStateKey, adminSettingsPageMenuReducer),
  EffectsModule.forFeature([AdminSettingsPageMenuEffects]),
]

@NgModule({
  declarations: [...components],
  imports: [
    ...framework,
    ...materials,
    ...modules,
    ...libs,
  ],
  exports: [...components],
})
export class AdminSettingsPageMenuModule { }
