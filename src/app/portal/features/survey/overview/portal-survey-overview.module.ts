import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatSortModule } from '@angular/material/sort';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CoreModule } from 'src/app/core/core.module';
import { CardModule } from 'src/app/shared/card/card.module';
import { SurveyFilterModule } from 'src/app/shared/filter/survey-filter/survey-filter.module';
import { TableModule } from 'src/app/shared/table/table.module';
import { TitleModule } from 'src/app/shared/title/title.module';
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
  CoreModule,
  CardModule,
  MatSortModule,
  PortalSurveyOverviewRoutingModule,
  SurveyFilterModule,
  TableModule,
  TitleModule,
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
  // providers: [...providers],
})
export class PortalSurveyOverviewModule {}
