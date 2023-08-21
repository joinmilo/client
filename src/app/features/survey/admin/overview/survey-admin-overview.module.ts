import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CoreModule } from 'src/app/core/core.module';
import { TitleModule } from 'src/app/shared/layout/title/title.module';
import { TableModule } from 'src/app/shared/widgets/table/table.module';
import { SurveyAdminOverviewComponent } from './component/survey-admin-overview.component';
import { SurveyFilterModule } from 'src/app/shared/filter/survey-filter/survey-filter.module';
import { SurveyAdminOverviewRoutingModule } from './survey-admin-overview-routing.module';
import { surveyAdminOverviewReducer } from './state/survey-portal-overview.reducer';
import { surveyAdminOverviewStateKey } from './constants/survey-admin-overview.constants';
import { SurveyAdminOverviewEffects } from './state/survey-portal-overview.effects';

const components = [
  SurveyAdminOverviewComponent
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
  SurveyAdminOverviewRoutingModule,
  TableModule,
  TitleModule,
];

const libs = [
  StoreModule.forFeature(surveyAdminOverviewStateKey, surveyAdminOverviewReducer),
  EffectsModule.forFeature([SurveyAdminOverviewEffects]),
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
export class SurveyAdminOverviewModule { }
