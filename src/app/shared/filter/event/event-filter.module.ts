import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { DateRangeFilterComponent } from 'ngx-cinlib/filters/date-range';
import { FilterAreaComponent } from 'ngx-cinlib/filters/filter-area';
import { I18nDirective, TranslatablePipe } from 'ngx-cinlib/i18n';
import { CoreModule } from 'src/app/core/core.module';
import { SuburbFilterModule } from '../suburb/suburb-filter.module';
import { EventFilterCategoryComponent } from './components/category/event-filter-category.component';
import { EventFilterComponent } from './components/event-filter.component';
import { EventFilterFreeComponent } from './components/free/event-filter-free.component';
import { EventFilterPastComponent } from './components/past/event-filter-past.component';
import { EventFilterTargetgroupComponent } from './components/targetgroup/event-filter-targetgroup.component';
import { eventFilterStateKey } from './constants/event-filter.constants';
import { EventFilterEffects } from './state/event-filter.effects';
import { eventFilterReducer } from './state/event-filter.reducer';

const components = [
  EventFilterComponent,
  EventFilterCategoryComponent,
  EventFilterFreeComponent,
  EventFilterPastComponent,
  EventFilterTargetgroupComponent,
];

const framework = [
  CommonModule,
  ReactiveFormsModule,
];

const materials = [
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatSelectModule,
];

const modules = [
  CoreModule,
  SuburbFilterModule,
];

const libs = [
  StoreModule.forFeature(eventFilterStateKey, eventFilterReducer),
  EffectsModule.forFeature([EventFilterEffects]),

  DateRangeFilterComponent,
  FilterAreaComponent,
  I18nDirective,
  TranslatablePipe,
];

@NgModule({
  declarations: [...components],
  imports: [
    ...framework,
    ...materials,
    ...modules,
    ...libs,
  ],
  exports: [...components],
})
export class EventFilterModule { }