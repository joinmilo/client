import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CoreModule } from 'src/app/core/core.module';
import { TitleModule } from 'src/app/shared/layout/title/title.module';
import { MediaService } from '../../services/media.service';
import { MediaWidgetsModule } from '../widgets/media-widgets.module';
import { MediaFormEntryComponent } from './components/entry/media-form-entry.component';
import { MediaFormDialogComponent } from './components/form-dialog/media-form-dialog.component';
import { MediaFormComponent } from './components/form/media-form.component';
import { MediaUploadComponent } from './components/upload/media-form-upload.component';

const components = [
  MediaFormEntryComponent,
  MediaFormComponent,
  MediaFormDialogComponent,
  MediaUploadComponent,
];

const framework = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  RouterModule
];

const materials = [
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatDialogModule,
  MatDividerModule,
];

const modules = [
  CoreModule,
  MediaWidgetsModule,
  TitleModule,
];

const libs = [
  FontAwesomeModule,
];

const providers = [
  MediaService,
]

@NgModule({
  declarations: [
    ...components,
  ],
  imports: [
    ...framework,
    ...materials,
    ...modules,
    ...libs,
  ],
  exports: [
    ...components,
  ],
  providers: [
    ...providers,
  ]
})
export class MediaFormModule { }
