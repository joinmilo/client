import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CoreModule } from 'src/app/core/core.module';
import { DateRangeFilterComponent } from 'src/app/shared/filter/date-range/date-range-filter.component';
import { TableModule } from 'src/app/shared/widgets/table/table.module';
import { EventAdminDetailsCommentsComponent } from './components/event-admin-details-comments.component';
import { eventAdminDetailsCommentsStateKey } from './constants/event-admin-details-comments.constants';
import { EventAdminDetailsCommentsEffects } from './state/event-admin-details-comments.effects';
import { eventAdminDetailsCommentsReducer } from './state/event-admin-details-comments.reducer';

const components = [
  EventAdminDetailsCommentsComponent,
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
  StoreModule.forFeature(eventAdminDetailsCommentsStateKey, eventAdminDetailsCommentsReducer),
  EffectsModule.forFeature([EventAdminDetailsCommentsEffects]),
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
export class EventAdminDetailsCommentsModule { }
