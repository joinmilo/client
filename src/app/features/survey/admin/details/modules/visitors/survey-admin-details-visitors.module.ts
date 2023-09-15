import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CoreModule } from 'src/app/core/core.module';
import { AnalyticsVisitorsComponent } from 'src/app/shared/widgets/analytics/components/visitors/analytics-visitors.component';
import { SurveyAdminDetailsVisitorsComponent } from './component/survey-admin-details-visitors.component';
import { surveyAdminDetailsVisitorsStateKey } from './constants/survey-admin-details-visitors.constants';
import { SurveyAdminDetailsVisitorsEffects } from './state/survey-admin-details-visitors.effects';
import { surveyAdminDetailsVisitorsReducer } from './state/survey-admin-details-visitors.reducer';

const components = [
  SurveyAdminDetailsVisitorsComponent,
]

const framework = [
  CommonModule,
];

const modules = [
  CoreModule,
  AnalyticsVisitorsComponent,
];

const libs = [
  StoreModule.forFeature(surveyAdminDetailsVisitorsStateKey, surveyAdminDetailsVisitorsReducer),
  EffectsModule.forFeature([SurveyAdminDetailsVisitorsEffects]),
];

@NgModule({
  declarations: [...components],
  imports: [
    ...framework,
    ...libs,
    ...modules,
  ],
  exports: [...components],
})
export class SurveyAdminDetailsVisitorsModule { }
