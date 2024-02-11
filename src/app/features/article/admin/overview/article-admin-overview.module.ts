import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { PageTitleComponent } from 'ngx-cinlib/layouts/title';
import { TableComponent } from 'ngx-cinlib/tables';
import { CoreModule } from 'src/app/core/core.module';
import { ArticleFilterModule } from 'src/app/shared/filter/article/article-filter.module';
import { ArticleAdminOverviewRoutingModule } from './article-admin-overview-routing.module';
import { ArticleAdminOverviewComponent } from './component/article-admin-overview.component';
import { articleAdminOverviewStateKey } from './constants/article-admin-overview.constants';
import { ArticleAdminOverviewEffects } from './state/article-admin-overview.effects';
import { articleAdminOverviewReducer } from './state/article-admin-overview.reducer';

const components = [
  ArticleAdminOverviewComponent
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
  ArticleAdminOverviewRoutingModule,
];

const libs = [
  StoreModule.forFeature(articleAdminOverviewStateKey, articleAdminOverviewReducer),
  EffectsModule.forFeature([ArticleAdminOverviewEffects]),

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
export class ArticleAdminOverviewModule { }
