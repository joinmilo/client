import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CoreModule } from 'src/app/core/core.module';
import { UserCommentComponent } from './comment/user-comment.component';
import { CommentButtonComponent, CommentDialogComponent } from './comment-button/comment-button.component';

const components = [
  UserCommentComponent,
  CommentButtonComponent,
  CommentDialogComponent, 
];

const framework = [
  ReactiveFormsModule,
];

const materials = [
  MatDialogModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
];

const modules = [
  CoreModule,
];

@NgModule({
  declarations: [...components],
  imports: [
    ...framework,
    ...materials,
    ...modules,
  ],
  exports: [...components],
})
export class UserCommentModule { }