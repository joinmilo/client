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
import { GuestArticleAdminOverviewComponent } from './component/guest-article-admin-overview.component';
import { guestArticleAdminOverviewStateKey } from './constants/guest-article-admin-overview.constants';
import { GuestArticleAdminOverviewRoutingModule } from './guest-article-admin-overview-routing.module';
import { GuestArticleAdminOverviewEffects } from './state/guest-article-admin-overview.effects';
import { guestArticleAdminOverviewReducer } from './state/guest-article-admin-overview.reducer';

const components = [
  GuestArticleAdminOverviewComponent
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
  GuestArticleAdminOverviewRoutingModule,
];

const libs = [
  StoreModule.forFeature(guestArticleAdminOverviewStateKey, guestArticleAdminOverviewReducer),
  EffectsModule.forFeature([GuestArticleAdminOverviewEffects]),

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
export class GuestArticleAdminOverviewModule { }
