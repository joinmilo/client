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
import { TableModule } from 'src/app/shared/widgets/table/table.module';
import { TextElementComponent } from 'src/app/shared/widgets/text/element/text-element.component';
import { ContestPortalDetailsParticipationsCardComponent } from '../card/contest-portal-details-participations-card.component';
import { ContestPortalDetailsVoteComponent } from './components/contest-portal-details-vote.component';
import { contestPortalDetailsVoteStateKey } from './constants/contest-portal-details-vote.constants';
import { ContestPortalDetailsVoteEffects } from './state/contest-portal-details-vote.effects';
import { contestPortalDetailsVoteReducer } from './state/contest-portal-details-vote.reducer';


const components = [
  ContestPortalDetailsVoteComponent,
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
  ContestPortalDetailsParticipationsCardComponent,
  MediaWidgetsModule,
  DateRangeFilterComponent,
  TableModule,
  TitleModule,
  TextElementComponent
];

const libs = [
  StoreModule.forFeature(contestPortalDetailsVoteStateKey, contestPortalDetailsVoteReducer),
  EffectsModule.forFeature([ContestPortalDetailsVoteEffects]),
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
export class ContestPortalDetailsVoteModule { }
