import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CoreModule } from 'src/app/core/core.module';
import { DateRangeFilterComponent } from 'src/app/shared/filter/date-range/date-range-filter.component';
import { TableModule } from 'src/app/shared/widgets/table/table.module';
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
  TableModule,
  DateRangeFilterComponent
];

const libs = [
  StoreModule.forFeature(articleAdminDetailsFavoritesStateKey, articleAdminDetailsFavoritesReducer),
  EffectsModule.forFeature([ArticleAdminDetailsFavoritesEffects]),
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
