
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
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CoreModule } from 'src/app/core/core.module';
import { CkEditorFormComponent } from 'src/app/shared/form/ck-editor/ck-editor-form.component';
import { DragAndDropModule } from 'src/app/shared/layout/drag-drop/drag-drop.module';
import { GridLayoutModule } from 'src/app/shared/layout/grid-layout/grid-layout.module';
import { MediaFormModule } from 'src/app/shared/media/modules/form/media-form.module';
import { AdminSettingsPageEmbeddingComponent } from './components/admin-settings-page-embedding.component';
import { AdminSettingsPageEmbeddingDialogComponent } from './components/dialog/admin-settings-page-embedding-dialog.component';
import { AdminSettingsPageEmbeddingExpansionComponent } from './components/expansion/admin-settings-page-embedding-expansion.component';
import { AdminSettingsPageEmbeddingFormComponent } from './components/form/admin-settings-page-embedding-form.component';
import { AdminSettingsPageEmbeddingMediaSliderComponent } from './components/media-slider/admin-settings-page-embedding-media-slider.component';
import { AdminSettingsPageEmbeddingPluginComponent } from './components/plugin/admin-settings-page-embedding-plugin.component';
import { AdminSettingsPageEmbeddingTextMediaComponent } from './components/text-media/admin-settings-page-embedding-text-media.component';
import { adminSettingsPageEmbeddingStateKey } from './constants/admin-settings-page-emedding.constants';
import { AdminSettingsPageEmbeddingEffects } from './state/admin-settings-page-embedding.effects';
import { adminSettingsPageEmbeddingReducer } from './state/admin-settings-page-embedding.reducer';

const components = [
  AdminSettingsPageEmbeddingComponent,
  AdminSettingsPageEmbeddingDialogComponent,
  AdminSettingsPageEmbeddingExpansionComponent,
  AdminSettingsPageEmbeddingFormComponent,
  AdminSettingsPageEmbeddingMediaSliderComponent,
  AdminSettingsPageEmbeddingPluginComponent,
  AdminSettingsPageEmbeddingTextMediaComponent,
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
  CkEditorFormComponent,
  CoreModule,
  GridLayoutModule,
  DragAndDropModule,
  MediaFormModule,
];

const libs = [
  FontAwesomeModule,
  StoreModule.forFeature(adminSettingsPageEmbeddingStateKey, adminSettingsPageEmbeddingReducer),
  EffectsModule.forFeature([AdminSettingsPageEmbeddingEffects]),
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
