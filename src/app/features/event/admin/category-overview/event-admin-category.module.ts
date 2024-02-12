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
import { EventAdminCategoryComponent } from './component/event-admin-category.component';
import { eventAdminCategoryStateKey } from './constants/event-admin-category.constants';
import { EventAdminCategoryRoutingModule } from './event-admin-category-routing.module';
import { EventAdminCategoryEffects } from './state/event-admin-category.effects';
import { eventAdminCategoryReducer } from './state/event-admin-category.reducer';

const components = [
  EventAdminCategoryComponent,
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
];

const libs = [
  StoreModule.forFeature(eventAdminCategoryStateKey, eventAdminCategoryReducer),
  EffectsModule.forFeature([EventAdminCategoryEffects]),

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
export class EventAdminCategoryModule { }
