import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CoreModule } from 'src/app/core/core.module';
import { DateRangeFilterComponent } from 'src/app/shared/filter/date-range/date-range-filter.component';
import { IntervalFilterComponent } from 'src/app/shared/filter/interval/interval-filter.component';
import { ChartModule } from 'src/app/shared/widgets/chart/chart.module';
import { EventAdminDetailsVisitorsComponent } from './component/event-admin-details-visitors.component';
import { eventAdminDetailsVisitorsStateKey } from './constants/event-admin-details-visitors.constants';
import { EventAdminDetailsVisitorsEffects } from './state/event-admin-details-visitors.effects';
import { eventAdminDetailsVisitorsReducer } from './state/event-admin-details-visitors.reducer';

const components = [
  EventAdminDetailsVisitorsComponent,
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
  StoreModule.forFeature(eventAdminDetailsVisitorsStateKey, eventAdminDetailsVisitorsReducer),
  EffectsModule.forFeature([EventAdminDetailsVisitorsEffects]),
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
export class EventAdminDetailsVisitorsModule { }
