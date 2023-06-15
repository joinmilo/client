import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CoreModule } from "../../core/core.module";
import { CommentButtonComponent } from './comment-button/comment-button.component';
import { CommentDialogComponent } from './comment-dialog/comment-dialog.component';
import { CommentComponent } from './component/comment.component';

const components = [
  CommentComponent,
  CommentButtonComponent,
  CommentDialogComponent
];

const framework = [
  CommonModule,
  RouterModule,
  ReactiveFormsModule,
];

const modules = [
  CoreModule,
];

const libs = [
  FontAwesomeModule,
];

const materials = [
  MatDialogModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
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