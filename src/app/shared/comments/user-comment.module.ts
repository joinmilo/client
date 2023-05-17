import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CoreModule } from 'src/app/core/core.module';
import { CommentButtonComponent, CommentDialogComponent } from './comment-button/comment-button.component';
import { commentStateKey } from './comment.constant';
import { UserCommentComponent } from './comment/user-comment.component';
import { CommentEffects } from './state/comment.effects';
import { commentReducer } from './state/comment.reducer';

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

const libs = [
  StoreModule.forFeature(commentStateKey, commentReducer),
  EffectsModule.forFeature([CommentEffects]),
]

@NgModule({
  declarations: [...components],
  imports: [
    ...libs,
    ...framework,
    ...materials,
    ...modules,
  ],
  exports: [...components],
})
export class UserCommentModule { }