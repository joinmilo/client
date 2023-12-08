import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CoreModule } from 'src/app/core/core.module';
import { CaptchaModule } from 'src/app/shared/form/captcha/captcha.module';
import { RadioButtonFormModule } from 'src/app/shared/form/radio-button/radio-button-form.module';
import { ReportEmbeddingComponent } from './component/report-embedding.component';
import { reportEmbeddingStateKey } from './constants/report-embedding.constant';
import { ReportEmbeddingEffects } from './state/report-embedding.effects';
import { reportEmbeddingReducer } from './state/report-embedding.reducer';

const components = [
  ReportEmbeddingComponent,
];

const framework = [
  CommonModule,
  ReactiveFormsModule,
];

const materials = [
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatInputModule,
  MatSelectModule,
];

const modules = [
  CoreModule,
  CaptchaModule,
  RadioButtonFormModule,
];

const libs = [
  StoreModule.forFeature(reportEmbeddingStateKey, reportEmbeddingReducer),
  EffectsModule.forFeature([ReportEmbeddingEffects]),
]

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
export class ReportEmbeddingModule { }
