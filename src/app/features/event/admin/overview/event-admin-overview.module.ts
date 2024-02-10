import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { PageTitleComponent } from 'ngx-cinlib/layouts/title';
import { CoreModule } from 'src/app/core/core.module';
import { EventFilterModule } from 'src/app/shared/filter/event/event-filter.module';
import { TableModule } from 'src/app/shared/widgets/table/table.module';
import { EventAdminOverviewComponent } from './component/event-admin-overview.component';
import { eventAdminOverviewStateKey } from './constants/event-admin-overview.constants';
import { EventAdminOverviewRoutingModule } from './event-admin-overview-routing.module';
import { EventAdminOverviewEffects } from './state/event-admin-overview.effects';
import { eventAdminOverviewReducer } from './state/event-admin-overview.reducer';

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
];

const libs = [
  StoreModule.forFeature(eventAdminOverviewStateKey, eventAdminOverviewReducer),
  EffectsModule.forFeature([EventAdminOverviewEffects]),

  PageTitleComponent,
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
