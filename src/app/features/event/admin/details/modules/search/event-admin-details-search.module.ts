import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CoreModule } from 'src/app/core/core.module';
import { DateRangeFilterComponent } from 'src/app/shared/filter/date-range/date-range-filter.component';
import { IntervalFilterComponent } from 'src/app/shared/filter/interval/interval-filter.component';
import { ChartModule } from 'src/app/shared/widgets/chart/chart.module';
import { EventAdminDetailsSearchComponent } from './component/event-admin-details-search.component';
import { eventAdminDetailsSearchStateKey } from './constants/event-admin-details-search.constants';
import { EventAdminDetailsSearchEffects } from './state/event-admin-details-search.effects';
import { eventAdminDetailsSearchReducer } from './state/event-admin-details-search.reducer';

const components = [
  EventAdminDetailsSearchComponent,
]

const framework = [
  CommonModule,
];

const modules = [
  ChartModule,
  CoreModule,
  DateRangeFilterComponent,
  IntervalFilterComponent,
];

const libs = [
  StoreModule.forFeature(eventAdminDetailsSearchStateKey, eventAdminDetailsSearchReducer),
  EffectsModule.forFeature([EventAdminDetailsSearchEffects]),
];

@NgModule({
  declarations: [...components],
  imports: [
    ...framework,
    ...libs,
    ...modules,
  ],
  exports: [...components],
})
export class EventAdminDetailsSearchModule { }
