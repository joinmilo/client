import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { DateRangeFilterComponent, FilterAreaComponent, FilterService } from 'ngx-cinlib/filters';
import { I18nDirective, TranslatablePipe } from 'ngx-cinlib/i18n';
import { CoreModule } from 'src/app/core/core.module';
import { SuburbFilterModule } from '../suburb/suburb-filter.module';
import { MediaFilterCategoryComponent } from './components/category/media-filter-category.component';
import { MediaFilterComponent } from './components/media-filter.component';
import { MediaFilterTypeComponent } from './components/media-type/media-filter-type.component';
import { mediaFilterStateKey } from './constants/media-filter.constants';
import { MediaFilterEffects } from './state/media-filter.effects';
import { mediaFilterReducer } from './state/media-filter.reducer';

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
];

const libs = [
  StoreModule.forFeature(mediaFilterStateKey, mediaFilterReducer),
  EffectsModule.forFeature([MediaFilterEffects]),

  DateRangeFilterComponent,
  FilterAreaComponent,
  I18nDirective,
  TranslatablePipe,
];

const providers = [
  FilterService,
]

@NgModule({
  declarations: [...components],
  imports: [
    ...framework,
    ...materials,
    ...modules,
    ...libs,
  ],
  exports: [...components],
  providers: [...providers],
})
export class MediaFilterModule { }
