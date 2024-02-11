import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { TableComponent } from 'ngx-cinlib/tables';
import { CoreModule } from 'src/app/core/core.module';
import { ArticleAdminDetailsFavoritesComponent } from './components/article-admin-details-favorites.component';
import { articleAdminDetailsFavoritesStateKey } from './constants/article-admin-details-favorites.constants';
import { ArticleAdminDetailsFavoritesEffects } from './state/article-admin-details-favorites.effects';
import { articleAdminDetailsFavoritesReducer } from './state/article-admin-details-favorites.reducer';

const components = [
  ArticleAdminDetailsFavoritesComponent,
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
];

const libs = [
  StoreModule.forFeature(articleAdminDetailsFavoritesStateKey, articleAdminDetailsFavoritesReducer),
  EffectsModule.forFeature([ArticleAdminDetailsFavoritesEffects]),

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
export class ArticleAdminDetailsFavoritesModule { }
