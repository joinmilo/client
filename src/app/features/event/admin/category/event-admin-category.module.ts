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
import { EventAdminCategoryComponent } from './component/event-admin-category.component';
import { eventAdminCategoryStateKey } from './constants/event-admin-category.constants';
import { EventAdminCategoryRoutingModule } from './event-admin-category-routing.module';
import { EventAdminCategoryEffects } from './state/event-admin-category.effects';
import { eventAdminCategoryReducer } from './state/event-admin-category.reducer';

const components = [
  EventAdminCategoryComponent
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
  EventAdminCategoryRoutingModule,
  TableModule,
  TitleModule,
];

const libs = [
  StoreModule.forFeature(eventAdminCategoryStateKey, eventAdminCategoryReducer),
  EffectsModule.forFeature([EventAdminCategoryEffects]),
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
export class EventAdminCategoryModule { }
