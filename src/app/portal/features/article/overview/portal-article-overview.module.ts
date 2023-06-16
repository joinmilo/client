import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CoreModule } from 'src/app/core/core.module';
import { CardModule } from 'src/app/shared/card/card.module';
import { ArticleFilterModule } from 'src/app/shared/filter/article-filter/article-filter.module';
import { FormModule } from 'src/app/shared/form/form.module';
import { TableModule } from 'src/app/shared/table/table.module';
import { TitleModule } from 'src/app/shared/title/title.module';
import { PortalArticleOverviewCategoryComponent } from './components/category/portal-article-overview-category.component';
import { PortalArticleOverviewEmptyComponent } from './components/empty/portal-article-overview-empty.component';
import { PortalArticleOverviewComponent } from './components/portal-article-overview.component';
import { PortalArticleOverviewTableComponent } from './components/table/portal-article-overview-table.component';
import { portalArticleOverviewStateKey } from './constants/portal-article-overview.constants';
import { PortalArticleOverviewRoutingModule } from './portal-article-overview-routing.module';
import { PortalArticleOverviewEffects } from './state/portal-article-overview.effects';
import { portalArticleOverviewReducer } from './state/portal-article-overview.reducer';

const components = [
  PortalArticleOverviewComponent,
  PortalArticleOverviewCategoryComponent,
  PortalArticleOverviewEmptyComponent,
  PortalArticleOverviewTableComponent,
]

const framework = [
  CommonModule,
];

const materials = [
  MatCardModule,
];

const modules = [
  CoreModule,
  CardModule,
  ArticleFilterModule,
  PortalArticleOverviewRoutingModule,
  FormModule,
  TableModule,
  TitleModule,
];

const libs = [
  StoreModule.forFeature(portalArticleOverviewStateKey, portalArticleOverviewReducer),
  EffectsModule.forFeature([PortalArticleOverviewEffects]),
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
export class PortalArticleOverviewModule { }
