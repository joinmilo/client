import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { PageTitleComponent } from 'ngx-cinlib/layouts/title';
import { TablePaginatorComponent, TableSortComponent } from 'ngx-cinlib/tables';
import { CoreModule } from 'src/app/core/core.module';
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
  TextElementComponent
];

const libs = [
  StoreModule.forFeature(contestPortalDetailsVoteStateKey, contestPortalDetailsVoteReducer),
  EffectsModule.forFeature([ContestPortalDetailsVoteEffects]),

  PageTitleComponent,
  TableSortComponent,
  TablePaginatorComponent,
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
