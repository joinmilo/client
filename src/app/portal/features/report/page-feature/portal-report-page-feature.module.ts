import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CoreModule } from 'src/app/core/core.module';
import { CaptchaModule } from 'src/app/shared/captcha/captcha.module';
import { RadioButtonFormModule } from 'src/app/shared/form/radio-button/radio-button-form.module';
import { ReportPageFeatureComponent } from './component/report-page-feature.component';
import { reportPageFeatureStateKey } from './constants/report-page-feature.constant';
import { ReportPageFeatureEffects } from './state/report-page-feature.effects';
import { reportPageFeatureReducer } from './state/report-page-feature.reducer';

const components = [
  ReportPageFeatureComponent,
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
  FontAwesomeModule,
  StoreModule.forFeature(reportPageFeatureStateKey, reportPageFeatureReducer),
  EffectsModule.forFeature([ReportPageFeatureEffects]),
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
export class PortalReportPageFeatureModule { }
