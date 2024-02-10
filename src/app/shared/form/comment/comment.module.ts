import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { DatePieceComponent } from 'ngx-cinlib/date/piece';
import { CaptchaModule } from 'ngx-cinlib/forms/captcha';
import { IconComponent } from 'ngx-cinlib/icons';
import { DetailsTitleComponent, PageTitleComponent } from 'ngx-cinlib/layouts/title';
import { MediaAvatarComponent } from 'ngx-cinlib/media/elements';
import { CoreModule } from '../../../core/core.module';
import { CommentDialogComponent } from './components/dialog/comment-dialog.component';
import { CommentEntryComponent } from './components/entry/comment-entry.component';
import { CommentFormComponent } from './components/form/comment-form.component';
import { CommentOverviewComponent } from './components/overview/comment-overview.component';


const components = [
  CommentEntryComponent,
  CommentFormComponent,
  CommentDialogComponent,
  CommentOverviewComponent,
];

const framework = [
  CommonModule,
  RouterModule,
  ReactiveFormsModule
];

const materials = [
  MatDialogModule,
  MatDividerModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
];

const modules = [
  CoreModule,
];

const libs = [
  CaptchaModule,
  DatePieceComponent,
  DetailsTitleComponent,
  IconComponent,
  MediaAvatarComponent,
  PageTitleComponent,
];

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
export class CommentModule { }