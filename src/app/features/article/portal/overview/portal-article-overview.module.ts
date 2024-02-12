import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { RadioButtonGroupComponent } from 'ngx-cinlib/forms/radio-button';
import { I18nDirective, TranslatablePipe } from 'ngx-cinlib/i18n';
import { PageTitleComponent } from 'ngx-cinlib/layouts/title';
import { TableComponent } from 'ngx-cinlib/tables';
import { CoreModule } from 'src/app/core/core.module';
import { ArticleFilterModule } from 'src/app/shared/filter/article/article-filter.module';
import { NoDataComponent } from 'src/app/shared/layout/no-data/no-data.component';
import { CardModule } from 'src/app/shared/widgets/card/card.module';
import { CardSliderComponent } from 'src/app/shared/widgets/sliders/card-slider/card-slider.component';
import { PortalArticleOverviewCategoryComponent } from './components/category/portal-article-overview-category.component';
import { PortalArticleOverviewComponent } from './components/portal-article-overview.component';
import { PortalArticleOverviewTableComponent } from './components/table/portal-article-overview-table.component';
import { portalArticleOverviewStateKey } from './constants/portal-article-overview.constants';
import { PortalArticleOverviewRoutingModule } from './portal-article-overview-routing.module';
import { PortalArticleOverviewEffects } from './state/portal-article-overview.effects';
import { portalArticleOverviewReducer } from './state/portal-article-overview.reducer';

const components = [
  PortalArticleOverviewComponent,
  PortalArticleOverviewCategoryComponent,
  PortalArticleOverviewTableComponent,
]

const framework = [
  CommonModule,
];

const materials = [
  MatButtonModule,
  MatCardModule,
];

const modules = [
  ArticleFilterModule,
  CoreModule,
  CardModule,
  CardSliderComponent,
  NoDataComponent,
  PortalArticleOverviewRoutingModule,
];

const libs = [
  StoreModule.forFeature(portalArticleOverviewStateKey, portalArticleOverviewReducer),
  EffectsModule.forFeature([PortalArticleOverviewEffects]),

  I18nDirective,
  RadioButtonGroupComponent,
  PageTitleComponent,
  TableComponent,
  TranslatablePipe,
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
