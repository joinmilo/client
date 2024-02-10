import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { PageTitleComponent } from 'ngx-cinlib/layouts/title';
import { CoreModule } from 'src/app/core/core.module';
import { SurveyFilterModule } from 'src/app/shared/filter/survey/survey-filter.module';
import { TableModule } from 'src/app/shared/widgets/table/table.module';
import { SurveyAdminOverviewComponent } from './component/survey-admin-overview.component';
import { surveyAdminOverviewStateKey } from './constants/survey-admin-overview.constants';
import { SurveyAdminOverviewEffects } from './state/survey-admin-overview.effects';
import { surveyAdminOverviewReducer } from './state/survey-admin-overview.reducer';
import { SurveyAdminOverviewRoutingModule } from './survey-admin-overview-routing.module';

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
];

const libs = [
  StoreModule.forFeature(surveyAdminOverviewStateKey, surveyAdminOverviewReducer),
  EffectsModule.forFeature([SurveyAdminOverviewEffects]),

  PageTitleComponent,
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
