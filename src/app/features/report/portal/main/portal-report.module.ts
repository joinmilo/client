import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CaptchaModule } from 'ngx-cinlib/forms/captcha';
import { I18nDirective, TranslatablePipe } from 'ngx-cinlib/i18n';
import { PageTitleComponent } from 'ngx-cinlib/layouts/title';
import { CoreModule } from 'src/app/core/core.module';
import { CardModule } from 'src/app/shared/widgets/card/card.module';
import { PortalReportFormComponent } from './components/portal-report-form.component';
import { reportStateKey } from './constants/report.constants';
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
  PortalReportRoutingModule,
  CardModule
];

const libs = [
  StoreModule.forFeature(reportStateKey, reportReducer),
  EffectsModule.forFeature([ReportEffects]),

  CaptchaModule,
  I18nDirective,
  PageTitleComponent,
  TranslatablePipe,
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
