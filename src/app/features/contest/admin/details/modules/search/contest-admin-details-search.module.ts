import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { CoreModule } from 'src/app/core/core.module';
import { DateRangeFilterComponent } from 'src/app/shared/filter/date-range/date-range-filter.component';
import { IntervalFilterComponent } from 'src/app/shared/filter/interval/interval-filter.component';
import { ChartModule } from 'src/app/shared/widgets/chart/chart.module';
import { ContestAdminDetailsSearchComponent } from './component/contest-admin-details-search.component';
import { contestAdminDetailsSearchStateKey } from './constants/contest-admin-details-search.constants';
import { ContestAdminDetailsSearchEffects } from './state/contest-admin-details-search.effects';
import { contestAdminDetailsSearchReducer } from './state/contest-admin-details-search.reducer';

const components = [
  ContestAdminDetailsSearchComponent,
]

const framework = [
  CommonModule,
];

const materials = [
  MatButtonModule,
  MatCardModule,
];

const modules = [
  ChartModule,
  CoreModule,
  DateRangeFilterComponent,
  IntervalFilterComponent,
];

const libs = [
  StoreModule.forFeature(contestAdminDetailsSearchStateKey, contestAdminDetailsSearchReducer),
  EffectsModule.forFeature([ContestAdminDetailsSearchEffects]),
  FontAwesomeModule,
  NgxChartsModule,
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
export class ContestAdminDetailsSearchModule { }
