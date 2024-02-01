import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CoreModule } from 'src/app/core/core.module';
import { DateRangeFilterComponent } from 'src/app/shared/filter/date-range/date-range-filter.component';
import { TitleModule } from 'src/app/shared/layout/title/title.module';
import { MediaWidgetsModule } from 'src/app/shared/media/modules/widgets/media-widgets.module';
import { ConfettiComponent } from 'src/app/shared/widgets/contest-winner/confetti.component';
import { TableModule } from 'src/app/shared/widgets/table/table.module';
import { ContestPortalDetailsParticipationsCardComponent } from '../../card/contest-portal-details-participations-card.component';
import { ContestPortalDetailsWinnersComponent } from './components/contest-portal-details-winners.component';
import { contestPortalDetailsWinnersStateKey } from './constants/contest-portal-details-winners.constants';
import { ContestPortalDetailsWinnersEffects } from './state/contest-portal-details-winners.effects';
import { contestPortalDetailsWinnersReducer } from './state/contest-portal-details-winners.reducer';


const components = [
  ContestPortalDetailsWinnersComponent,
]

const framework = [
  CommonModule,
];

const materials = [
  MatButtonModule,
  MatCardModule,
];

const modules = [
  ConfettiComponent,
  ContestPortalDetailsParticipationsCardComponent,
  CoreModule,
  DateRangeFilterComponent,
  MediaWidgetsModule,
  TableModule,
  TitleModule,
];

const libs = [
  StoreModule.forFeature(contestPortalDetailsWinnersStateKey, contestPortalDetailsWinnersReducer),
  EffectsModule.forFeature([ContestPortalDetailsWinnersEffects]),
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
export class ContestPortalDetailsWinnersModule { }
