import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { PageTitleComponent } from 'ngx-cinlib/layouts/title';
import { CoreModule } from 'src/app/core/core.module';
import { ConfettiComponent } from 'src/app/shared/widgets/confetti/confetti.component';
import { ContestPortalDetailsParticipationsCardComponent } from '../card/contest-portal-details-participations-card.component';
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
];

const libs = [
  StoreModule.forFeature(contestPortalDetailsWinnersStateKey, contestPortalDetailsWinnersReducer),
  EffectsModule.forFeature([ContestPortalDetailsWinnersEffects]),

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
export class ContestPortalDetailsWinnersModule { }
