import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { RouterModule } from '@angular/router';
import { CaptchaModule } from 'ngx-cinlib/forms/captcha';
import { IconComponent } from 'ngx-cinlib/icons';
import { TitleModule } from 'src/app/shared/layout/title/title.module';
import { CoreModule } from '../../../core/core.module';
import { RatingDistributionComponent } from './components/distribution/rating-distribution.component';
import { RatingInputComponent } from './components/input/rating-input.component';
import { RatingComponent } from './components/rating.component';
;

const components = [
  RatingComponent,
  RatingInputComponent,
  RatingDistributionComponent
];

const framework = [
  CommonModule,
  RouterModule,
  CaptchaModule,
  TitleModule
];

const modules = [
  CoreModule,
  IconComponent,
];

const materials = [
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  FormsModule,
  MatProgressBarModule,
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
export class RatingModule { }