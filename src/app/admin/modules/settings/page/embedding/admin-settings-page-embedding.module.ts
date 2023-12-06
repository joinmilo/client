
import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CoreModule } from 'src/app/core/core.module';
import { DragDropComponent } from 'src/app/shared/widgets/drag-drop/drag-drop.component';
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
  DragDropModule,
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatDividerModule,
];

const modules = [
  CoreModule,
  DragDropComponent,
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
