import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CoreModule } from 'src/app/core/core.module';
import { ContestFilterModule } from 'src/app/shared/filter/contest/contest-filter.module';
import { NoDataComponent } from 'src/app/shared/layout/no-data/no-data.component';
import { TitleModule } from 'src/app/shared/layout/title/title.module';
import { CardModule } from 'src/app/shared/widgets/card/card.module';
import { CardSliderComponent } from 'src/app/shared/widgets/sliders/card-slider/card-slider.component';
import { PortalContestOverviewActiveComponent } from './components/active/portal-contest-overview-active.component';
import { PortalContestOverviewCompletedComponent } from './components/completed/portal-contest-overview-completed.component';
import { PortalContestOverviewComponent } from './components/portal-contest-overview.component';
import { PortalContestOverviewVoteableComponent } from './components/voteable/portal-contest-overview-voteable.component';
import { portalContestOverviewStateKey } from './constants/portal-contest-overview.constants';
import { PortalContestOverviewRoutingModule } from './portal-contest-overview-routing.module';
import { PortalContestOverviewEffects } from './state/portal-contest-overview.effects';
import { portalContestOverviewReducer } from './state/portal-contest-overview.reducer';

const components = [
  PortalContestOverviewComponent,
  PortalContestOverviewActiveComponent,
  PortalContestOverviewCompletedComponent,
  PortalContestOverviewVoteableComponent,
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
  CardModule,
  CardSliderComponent,
  ContestFilterModule,
  PortalContestOverviewRoutingModule,
  TitleModule,
  NoDataComponent
];

const libs = [
  StoreModule.forFeature(portalContestOverviewStateKey, portalContestOverviewReducer),
  EffectsModule.forFeature([PortalContestOverviewEffects]),
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
export class PortalContestOverviewModule { }
