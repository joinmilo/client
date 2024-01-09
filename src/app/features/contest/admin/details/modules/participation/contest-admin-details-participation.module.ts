import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CoreModule } from 'src/app/core/core.module';
import { DateRangeFilterComponent } from 'src/app/shared/filter/date-range/date-range-filter.component';
import { TableModule } from 'src/app/shared/widgets/table/table.module';
import { ContestAdminDetailsParticipationComponent } from './components/contest-admin-details-participation.component';
import { ContestAdminDetailsParticipationStateKey } from './constants/contest-admin-details-comments.constants';
import { ContestAdminDetailsParticipationReducer } from './state/contest-admin-details-participation.reducer';
import { ContestAdminDetailsParticipationEffects } from './state/contest-admin-details-participation.effects';

const components = [
  ContestAdminDetailsParticipationComponent
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
  TableModule,
  DateRangeFilterComponent
];

const libs = [
  StoreModule.forFeature(ContestAdminDetailsParticipationStateKey, ContestAdminDetailsParticipationReducer),
  EffectsModule.forFeature([ContestAdminDetailsParticipationEffects]),
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
export class ContestAdminDetailsParticipationModule { }
