import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CoreModule } from 'src/app/core/core.module';
import { EventFilterModule } from 'src/app/shared/filter/event/event-filter.module';
import { TitleModule } from 'src/app/shared/layout/title/title.module';
import { TableModule } from 'src/app/shared/widgets/table/table.module';
import { EventAdminFormComponent } from './component/event-admin-form.component';
import { eventAdminFormStateKey } from './constants/event-admin-form.constants';
import { EventAdminFormRoutingModule } from './event-admin-form-routing.module';
import { EventAdminFormEffects } from './state/event-portal-form.effects';
import { eventAdminFormReducer } from './state/event-portal-form.reducer';

const components = [
  EventAdminFormComponent
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
  EventAdminFormRoutingModule,
  TableModule,
  TitleModule,
];

const libs = [
  StoreModule.forFeature(eventAdminFormStateKey, eventAdminFormReducer),
  EffectsModule.forFeature([EventAdminFormEffects]),
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
export class EventAdminFormModule { }
