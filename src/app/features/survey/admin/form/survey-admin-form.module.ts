import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CoreModule } from 'src/app/core/core.module';
import { SurveyFilterModule } from 'src/app/shared/filter/survey/survey-filter.module';
import { TableModule } from 'src/app/shared/widgets/table/table.module';
import { SurveyAdminFormComponent } from './component/survey-admin-form.component';
import { surveyAdminFormStateKey } from './constants/event-admin-form.constants';
import { SurveyAdminFormEffects } from './state/survey-portal-form.effects';
import { surveyAdminFormReducer } from './state/survey-portal-form.reducer';
import { SurveyAdminFormRoutingModule } from './survey-admin-form-routing.module';

const components = [
  SurveyAdminFormComponent
]

const framework = [
  CommonModule,
];

const materials = [
  MatButtonModule,
  MatCardModule,
];

const modules = [
  CoreModule,
  SurveyFilterModule,
  SurveyAdminFormRoutingModule,
  TableModule,
];

const libs = [
  StoreModule.forFeature(surveyAdminFormStateKey, surveyAdminFormReducer),
  EffectsModule.forFeature([SurveyAdminFormEffects]),
];

@NgModule({
  declarations: [...components],
  imports: [
    ...framework,
    ...libs,
    ...materials,
    ...modules,
  ],
  exports: [...components],
})
export class SurveyAdminFormModule { }
