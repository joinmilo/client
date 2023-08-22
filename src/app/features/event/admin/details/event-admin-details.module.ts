import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CoreModule } from 'src/app/core/core.module';
import { EventFilterModule } from 'src/app/shared/filter/event-filter/event-filter.module';
import { TitleModule } from 'src/app/shared/layout/title/title.module';
import { TableModule } from 'src/app/shared/widgets/table/table.module';
import { EventAdminDetailsComponent } from './components/event-admin-details.component';
import { eventAdminDetailsStateKey } from './constants/event-admin-details.constants';
import { EventAdminDetailsRoutingModule } from './event-admin-details-routing.module';
import { EventAdminDetailsEffects } from './state/event-admin-details.effects';
import { eventAdminDetailsReducer } from './state/event-admin-details.reducer';


const components = [
  EventAdminDetailsComponent
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
  EventFilterModule,
  EventAdminDetailsRoutingModule,
  TableModule,
  TitleModule,
];

const libs = [
  StoreModule.forFeature(eventAdminDetailsStateKey, eventAdminDetailsReducer),
  EffectsModule.forFeature([EventAdminDetailsEffects]),
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
export class EventAdminDetailsModule { }
