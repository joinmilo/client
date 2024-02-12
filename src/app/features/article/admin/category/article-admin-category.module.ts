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
import { ArticleFilterModule } from 'src/app/shared/filter/article/article-filter.module';
import { ArticleAdminCategoryRoutingModule } from './article-admin-category-routing.module';
import { ArticleAdminCategoryComponent } from './component/article-admin-category.component';
import { articleAdminCategoryStateKey } from './constants/article-admin-category.constants';
import { ArticleAdminCategoryEffects } from './state/article-admin-category.effects';
import { articleAdminCategoryReducer } from './state/article-admin-category.reducer';

const components = [
  ArticleAdminCategoryComponent
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
  ArticleFilterModule,
  ArticleAdminCategoryRoutingModule,
];

const libs = [
  StoreModule.forFeature(articleAdminCategoryStateKey, articleAdminCategoryReducer),
  EffectsModule.forFeature([ArticleAdminCategoryEffects]),
  
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
export class ArticleAdminCategoryModule { }
