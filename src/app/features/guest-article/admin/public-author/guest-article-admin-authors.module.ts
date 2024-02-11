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
import { GuestArticleAdminPublicAuthorsComponent } from './component/guest-article-admin-authors.component';
import { guestArticleAdminPublicAuthorsStateKey } from './constants/guest-article-admin-authors.constants';
import { GuestArticleAdminPublicAuthorsRoutingModule } from './guest-article-admin-authors-routing.module';
import { GuestArticleAdminPublicAuthorsEffects } from './state/guest-article-admin-authors.effects';
import { guestArticleAdminPublicAuthorsReducer } from './state/guest-article-admin-authors.reducer';

const components = [
  GuestArticleAdminPublicAuthorsComponent
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
  GuestArticleAdminPublicAuthorsRoutingModule,
];

const libs = [
  StoreModule.forFeature(guestArticleAdminPublicAuthorsStateKey, guestArticleAdminPublicAuthorsReducer),
  EffectsModule.forFeature([GuestArticleAdminPublicAuthorsEffects]),

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
export class GuestArticleAdminPublicAuthorsModule { }
