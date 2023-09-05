import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CoreModule } from "../../../core/core.module";
import { DatePieceComponent } from '../../layout/date/date-piece.component';
import { TitleModule } from '../../layout/title/title.module';
import { MediaModule } from '../../media/media.module';
import { CaptchaModule } from '../captcha/captcha.module';
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
  CaptchaModule,
];

const libs = [
  FontAwesomeModule,
];

const materials = [
  MatDialogModule,
  MatDividerModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  ReactiveFormsModule
];

const modules = [
  CoreModule,
  DatePieceComponent,
  MediaModule,
  TitleModule,
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