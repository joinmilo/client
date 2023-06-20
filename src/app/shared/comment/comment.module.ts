import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CoreModule } from "../../core/core.module";
import { CaptchaModule } from '../captcha/captcha.module';
import { CommentButtonComponent } from './comment-button/comment-button.component';
import { CommentDialogComponent } from './comment-dialog/comment-dialog.component';
import { commentStateKey } from './comment.constant';
import { CommentComponent } from './component/comment.component';
import { CommentEffects } from './state/comment.effects';
import { commentReducer } from './state/comment.reducer';

const components = [
  CommentComponent,
  CommentButtonComponent,
  CommentDialogComponent
];

const framework = [
  CommonModule,
  RouterModule,
  CaptchaModule,

];

const modules = [
  CoreModule,
];

const libs = [
  FontAwesomeModule,
  StoreModule.forFeature(commentStateKey, commentReducer),
  EffectsModule.forFeature([CommentEffects]),
];

const materials = [
  MatDialogModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  ReactiveFormsModule
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