import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CoreModule } from 'src/app/core/core.module';
import { DateRangeFilterComponent } from '../date-range-filter/date-range-filter.component';
import { FilterAreaComponent } from '../filter-area/filter-area.component';
import { SuburbFilterModule } from '../suburb-filter/suburb-filter.module';
import { MediaFilterComponent } from './components/media-filter.component';
import { MediaFilterCategoryComponent } from './components/category/media-filter-category.component';
import { mediaFilterStateKey } from './constants/media-filter.constants';
import { mediaFilterReducer } from './state/media-filter.reducer';
import { MediaFilterEffects } from './state/media-filter.effects';
import { MediaFilterTypeComponent } from './components/media-type/media-filter-type.component';

const components = [
  MediaFilterComponent,
  MediaFilterCategoryComponent,
  MediaFilterTypeComponent
];

const framework = [
  CommonModule,
  ReactiveFormsModule,
];

const materials = [
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatSelectModule,
];

const modules = [
  CoreModule,
  SuburbFilterModule,

  DateRangeFilterComponent,
  FilterAreaComponent,
];

const libs = [
  FontAwesomeModule,
  StoreModule.forFeature(mediaFilterStateKey, mediaFilterReducer),
  EffectsModule.forFeature([MediaFilterEffects]),
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
export class MediaFilterModule { }
