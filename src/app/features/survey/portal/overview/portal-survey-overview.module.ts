import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatSortModule } from '@angular/material/sort';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CoreModule } from 'src/app/core/core.module';
import { SurveyFilterModule } from 'src/app/shared/filter/survey/survey-filter.module';
import { NoDataComponent } from 'src/app/shared/layout/no-data/no-data.component';
import { TitleModule } from 'src/app/shared/layout/title/title.module';
import { CardModule } from 'src/app/shared/widgets/card/card.module';
import { TableModule } from 'src/app/shared/widgets/table/table.module';
import { PortalSurveyOverviewEmptyComponent } from './components/empty/portal-survey-overview-empty.component';
import { PortalSurveyOverviewComponent } from './components/overview/portal-survey-overview.component';
import { portalSurveyOverviewStateKey } from './constants/portal-survey-overview.constant';
import { PortalSurveyOverviewRoutingModule } from './portal-survey-overview-routing.module';
import { PortalSurveyOverviewEffects } from './state/portal-survey-overview.effects';
import { portalSurveyOverviewReducer } from './state/portal-survey-overview.reducer';

const components = [
  PortalSurveyOverviewComponent,
  PortalSurveyOverviewEmptyComponent,
];

const framework = [
  CommonModule
];

const materials = [
  MatCardModule,
];

const modules = [
  CardModule,
  CoreModule,
  MatSortModule,
  PortalSurveyOverviewRoutingModule,
  SurveyFilterModule,
  TableModule,
  TitleModule,
  NoDataComponent
];

const libs = [
  FontAwesomeModule,
  StoreModule.forFeature(
    portalSurveyOverviewStateKey,
    portalSurveyOverviewReducer
  ),
  EffectsModule.forFeature([PortalSurveyOverviewEffects]),
];

@NgModule({
  declarations: [...components],
  imports: [...framework, ...materials, ...modules, ...libs],
  exports: [...components],
})
export class PortalSurveyOverviewModule {}
