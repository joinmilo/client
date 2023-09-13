import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CoreModule } from 'src/app/core/core.module';
import { DateRangeFilterComponent } from 'src/app/shared/filter/date-range/date-range-filter.component';
import { TableModule } from 'src/app/shared/widgets/table/table.module';
import { EventAdminDetailsAttendeeComponent } from './components/event-admin-details-attendee.component';
import { eventAdminDetailsAttendeeStateKey } from './constants/event-admin-details-comments.constants';
import { eventAdminDetailsAttendeeReducer } from './state/event-admin-details-attendee.reducer';
import { EventAdminDetailsAttendeeEffects } from './state/event-admin-details-attendee.effects';

const components = [
  EventAdminDetailsAttendeeComponent,
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
  StoreModule.forFeature(eventAdminDetailsAttendeeStateKey, eventAdminDetailsAttendeeReducer),
  EffectsModule.forFeature([EventAdminDetailsAttendeeEffects]),
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
export class EventAdminDetailsAttendeeModule { }
