import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { DateRangeFilterComponent, ExtendedSearchDirective, FilterAreaComponent, FilterService } from 'ngx-cinlib/filters';
import { I18nDirective, TranslatablePipe } from 'ngx-cinlib/i18n';
import { CoreModule } from 'src/app/core/core.module';
import { FreeSearchFilterComponent } from '../free-search/free-search-filter.component';
import { SuburbFilterModule } from '../suburb/suburb-filter.module';
import { ArticleFilterComponent } from './components/article-filter.component';
import { ArticleFilterCategoryComponent } from './components/category/article-filter-category.component';
import { articleFilterStateKey } from './constants/event-filter.constants';
import { ArticleFilterEffects } from './state/article-filter.effects';
import { articleFilterReducer } from './state/article-filter.reducer';

const components = [
  ArticleFilterComponent,
  ArticleFilterCategoryComponent,
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
  FreeSearchFilterComponent,
  SuburbFilterModule,
];

const libs = [
  EffectsModule.forFeature([ArticleFilterEffects]),
  StoreModule.forFeature(articleFilterStateKey, articleFilterReducer),

  ExtendedSearchDirective,
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
export class ArticleFilterModule { }