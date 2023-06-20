import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CoreModule } from "../../core/core.module";
import { CaptchaModule } from '../captcha/captcha.module';
import { AverageRatingComponent } from './average-rating/average-rating.component';
import { ProgressBarComponent } from './progress-bar/rating-progress-bar.component';
import { ratingStateKey } from './rating.constant';
import { SaveRatingDialogComponent } from './save-rating-dialog/save-rating-dialog.component';
import { SaveRatingComponent } from './save-rating/save-rating.component';
import { StarEvaluationComponent } from './star-evaluation/star-evaluation.component';
import { RatingEffects } from './state/rating.effects';
import { ratingReducer } from './state/rating.reducer';

const components = [
  SaveRatingComponent,
  AverageRatingComponent,
  SaveRatingDialogComponent,
  StarEvaluationComponent,
  ProgressBarComponent
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
  StoreModule.forFeature(ratingStateKey, ratingReducer),
  EffectsModule.forFeature([RatingEffects]),
];

const materials = [
  MatDialogModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  FormsModule,
  ReactiveFormsModule,
  MatProgressBarModule,
  MatCardModule,
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
export class RatingModule { }