import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CoreModule } from 'src/app/core/core.module';
import { TitleModule } from 'src/app/shared/layout/title/title.module';
import { TableModule } from 'src/app/shared/widgets/table/table.module';
import { EventAdminOverviewComponent } from './component/event-admin-overview.component';
import { EventFilterModule } from 'src/app/shared/filter/event-filter/event-filter.module';
import { EventAdminOverviewRoutingModule } from './event-admin-overview-routing.module';
import { eventAdminOverviewStateKey } from './constants/event-admin-overview.constants';
import { eventAdminOverviewReducer } from './state/event-portal-overview.reducer';
import { EventAdminOverviewEffects } from './state/event-portal-overview.effects';

const components = [
  EventAdminOverviewComponent
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
  EventAdminOverviewRoutingModule,
  TableModule,
  TitleModule,
];

const libs = [
  StoreModule.forFeature(eventAdminOverviewStateKey, eventAdminOverviewReducer),
  EffectsModule.forFeature([EventAdminOverviewEffects]),
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
export class EventAdminOverviewModule { }
