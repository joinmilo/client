import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CoreModule } from 'src/app/core/core.module';
import { AnalyticsSearchComponent } from 'src/app/shared/widgets/analytics/components/search/analytics-search.component';
import { SurveyAdminDetailsSearchComponent } from './component/survey-admin-details-search.component';
import { surveyAdminDetailsSearchStateKey } from './constants/survey-admin-details-search.constants';
import { SurveyAdminDetailsSearchEffects } from './state/survey-admin-details-search.effects';
import { surveyAdminDetailsSearchReducer } from './state/survey-admin-details-search.reducer';

const components = [
  SurveyAdminDetailsSearchComponent,
]

const framework = [
  CommonModule,
];

const modules = [
  AnalyticsSearchComponent,
  CoreModule,
];

const libs = [
  StoreModule.forFeature(surveyAdminDetailsSearchStateKey, surveyAdminDetailsSearchReducer),
  EffectsModule.forFeature([SurveyAdminDetailsSearchEffects]),
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
export class SurveyAdminDetailsSearchModule { }
