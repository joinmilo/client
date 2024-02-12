import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { I18nDirective, TranslatablePipe } from 'ngx-cinlib/i18n';
import { PageTitleComponent } from 'ngx-cinlib/layouts/title';
import { TableComponent } from 'ngx-cinlib/tables';
import { CoreModule } from 'src/app/core/core.module';
import { EventFilterModule } from 'src/app/shared/filter/event/event-filter.module';
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
];

const libs = [
  StoreModule.forFeature(eventAdminOverviewStateKey, eventAdminOverviewReducer),
  EffectsModule.forFeature([EventAdminOverviewEffects]),

  I18nDirective,
  PageTitleComponent,
  TableComponent,
  TranslatablePipe,
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
