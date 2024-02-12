import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { I18nDirective } from 'ngx-cinlib/i18n';
import { PageTitleComponent } from 'ngx-cinlib/layouts/title';
import { TableComponent } from 'ngx-cinlib/tables';
import { CoreModule } from 'src/app/core/core.module';
import { EventFilterModule } from 'src/app/shared/filter/event/event-filter.module';
import { EventAdminTargetGroupComponent } from './component/event-admin-target-group.component';
import { eventAdminTargetGroupStateKey } from './constants/event-admin-target-group.constants';
import { EventAdminTargetGroupRoutingModule } from './event-admin-target-group-routing.module';
import { EventAdminTargetGroupEffects } from './state/event-admin-target-group.effects';
import { eventAdminTargetGroupReducer } from './state/event-admin-target-group.reducer';

const components = [
  EventAdminTargetGroupComponent
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
  EventAdminTargetGroupRoutingModule,
];

const libs = [
  StoreModule.forFeature(eventAdminTargetGroupStateKey, eventAdminTargetGroupReducer),
  EffectsModule.forFeature([EventAdminTargetGroupEffects]),

  I18nDirective,
  PageTitleComponent,
  TableComponent,
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
export class EventAdminTargetGroupModule { }
