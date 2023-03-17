import { ReportInputComponent } from './pages/report-input/report-input.component';
/* eslint-disable  @typescript-eslint/no-explicit-any */
import { CommonModule } from '@angular/common';
import { NgModule, Type } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { NgHcaptchaModule } from 'ng-hcaptcha';
import { CoreModule } from 'src/app/core/core.module';
import { reportFeatureKey } from './constants/report.constant';
import { ReportPortalRoutingModule } from './report-routing.module';
import { ReportEffects } from './state/report.effects';
import { reportReducer } from './state/report.reducer';

const components: Type<any>[] = [
  ReportInputComponent
];

const framework: any[] = [
  CommonModule,
  StoreModule.forFeature(reportFeatureKey, reportReducer),
  EffectsModule.forFeature([ReportEffects]),
  ReactiveFormsModule
];

const materials: Type<any>[] = [
  MatFormFieldModule,
  MatSelectModule,
  FontAwesomeModule,
  MatButtonModule,
  MatSelectModule,
  MatInputModule

];

const modules: Type<any>[] = [
  CoreModule,
  ReportPortalRoutingModule,
];

@NgModule({
  declarations: [...components],
  imports: [
    ...framework,
    ...materials,
    ...modules,
    NgHcaptchaModule.forRoot({
      siteKey: '10000000-ffff-ffff-ffff-000000000001',
      languageCode: 'de'
    }),
  ],
  exports: [...components],
})
export class ReportPortalModule { }
