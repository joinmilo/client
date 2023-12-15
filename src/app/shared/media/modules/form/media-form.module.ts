import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { RouterModule } from '@angular/router';
import { CoreModule } from 'src/app/core/core.module';
import { TitleModule } from 'src/app/shared/layout/title/title.module';
import { IconComponent } from 'src/app/shared/widgets/icons/icon.component';
import { MediaService } from '../../services/media.service';
import { MediaWidgetsModule } from '../widgets/media-widgets.module';
import { MediaFormEditComponent } from './components/edit/media-form-edit.component';
import { MediaFormEntryComponent } from './components/entry/media-form-entry.component';
import { MediaFormDialogComponent } from './components/form-dialog/media-form-dialog.component';
import { MediaFormComponent } from './components/form/media-form.component';
import { MediaFormUploadComponent } from './components/upload/media-form-upload.component';
import { MediaFormUrlComponent } from './components/url/media-form-url.component';

const components = [
  MediaFormComponent,
  MediaFormDialogComponent,
  MediaFormEditComponent,
  MediaFormEntryComponent,
  MediaFormUploadComponent,
  MediaFormUrlComponent,
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
  MatExpansionModule,
  MatFormFieldModule,
  MatInputModule,
  MatSlideToggleModule,
];

const modules = [
  CoreModule,
  IconComponent,
  MediaWidgetsModule,
  TitleModule,
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
  ],
  exports: [
    ...components,
  ],
  providers: [
    ...providers,
  ]
})
export class MediaFormModule { }
