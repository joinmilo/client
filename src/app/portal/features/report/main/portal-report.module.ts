import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CoreModule } from 'src/app/core/core.module';
import { CaptchaModule } from 'src/app/shared/captcha/captcha.module';
import { CardModule } from 'src/app/shared/card/card.module';
import { FormModule } from 'src/app/shared/form/form.module';
import { TitleModule } from 'src/app/shared/title/title.module';
import { PortalReportFormComponent } from './components/portal-report-form.component';
import { reportStateKey } from './constants/report.constant';
import { PortalReportRoutingModule } from './portal-report-routing.module';
import { ReportEffects } from './state/report.effects';
import { reportReducer } from './state/report.reducer';

const components = [
  PortalReportFormComponent
];

const framework = [
  CommonModule,
  ReactiveFormsModule,
];

const materials = [
  MatFormFieldModule,
  MatSelectModule,
  MatButtonModule,
  MatSelectModule,
  MatInputModule
];

const modules = [
  CoreModule,
  CaptchaModule,
  FormModule,
  PortalReportRoutingModule,
  TitleModule,
  CardModule
];

const libs = [
  FontAwesomeModule,
  StoreModule.forFeature(reportStateKey, reportReducer),
  EffectsModule.forFeature([ReportEffects]),
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
export class PortalReportModule { }
