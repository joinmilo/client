
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
import { RichtextEditorFormComponent } from 'ngx-cinlib/forms/richtext';
import { DragDropContainerComponent, DragDropElementComponent } from 'ngx-cinlib/layouts/drag-drop';
import { GridColumnDirective, GridRowComponent } from 'ngx-cinlib/layouts/grid-layout';
import { MediaFormComponent } from 'ngx-cinlib/media/forms';
import { CoreModule } from 'src/app/core/core.module';
import { AdminSettingsPageEmbeddingComponent } from './components/admin-settings-page-embedding.component';
import { AdminSettingsPageEmbeddingDialogComponent } from './components/dialog/admin-settings-page-embedding-dialog.component';
import { AdminSettingsPageEmbeddingFormComponent } from './components/form/admin-settings-page-embedding-form.component';
import { adminSettingsPageEmbeddingStateKey } from './constants/admin-settings-page-emedding.constants';
import { AdminSettingsPageEmbeddingEffects } from './state/admin-settings-page-embedding.effects';
import { adminSettingsPageEmbeddingReducer } from './state/admin-settings-page-embedding.reducer';

const components = [
  AdminSettingsPageEmbeddingComponent,
  AdminSettingsPageEmbeddingDialogComponent,
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
];

const libs = [
  StoreModule.forFeature(adminSettingsPageEmbeddingStateKey, adminSettingsPageEmbeddingReducer),
  EffectsModule.forFeature([AdminSettingsPageEmbeddingEffects]),

  DragDropContainerComponent,
  DragDropElementComponent,
  GridColumnDirective,
  GridRowComponent,
  MediaFormComponent,
  RichtextEditorFormComponent,
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
export class AdminSettingsPageEmbeddingModule { }
