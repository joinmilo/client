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
import { TitleModule } from 'src/app/shared/title/title.module';
import { CoreModule } from "../../core/core.module";
import { CaptchaModule } from '../captcha/captcha.module';
import { RatingAverageComponent } from './average/rating-average.component';
import { ProgressBarComponent } from './progress-bar/rating-progress-bar.component';
import { RatingComponent } from './rating.component';
import { SaveRatingDialogComponent } from './save-rating-dialog/save-rating-dialog.component';
import { SaveRatingComponent } from './save-rating/save-rating.component';
import { StarEvaluationComponent } from './star-evaluation/star-evaluation.component';

const components = [
  RatingComponent,
  SaveRatingComponent,
  RatingAverageComponent,
  SaveRatingDialogComponent,
  StarEvaluationComponent,
  ProgressBarComponent
];

const framework = [
  CommonModule,
  RouterModule,
  CaptchaModule,
  TitleModule
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