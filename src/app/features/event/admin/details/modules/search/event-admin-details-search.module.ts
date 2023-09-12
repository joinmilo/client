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
import { ChartModule } from 'src/app/shared/widgets/chart/chart.module';
import { EventAdminDetailsSearchComponent } from './components/event-admin-details-search.component';
import { eventAdminDetailsSearchStateKey } from './constants/event-admin-details-search.constants';
import { EventAdminDetailsSearchEffects } from './state/event-admin-details-search.effects';
import { eventAdminDetailsSearchReducer } from './state/event-admin-details-search.reducer';

const components = [
  EventAdminDetailsSearchComponent,
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
];

const libs = [
  StoreModule.forFeature(eventAdminDetailsSearchStateKey, eventAdminDetailsSearchReducer),
  EffectsModule.forFeature([EventAdminDetailsSearchEffects]),
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
export class EventAdminDetailsSearchModule { }
