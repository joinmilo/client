import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CoreModule } from 'src/app/core/core.module';
import { DateRangeFilterComponent } from 'src/app/shared/filter/date-range/date-range-filter.component';
import { TableModule } from 'src/app/shared/widgets/table/table.module';
import { ArticleAdminDetailsCommentsComponent } from './components/article-admin-details-comments.component';
import { articleAdminDetailsCommentsStateKey } from './constants/article-admin-details-comments.constants';
import { ArticleAdminDetailsCommentsEffects } from './state/article-admin-details-comments.effects';
import { articleAdminDetailsCommentsReducer } from './state/article-admin-details-comments.reducer';

const components = [
  ArticleAdminDetailsCommentsComponent,
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
  StoreModule.forFeature(articleAdminDetailsCommentsStateKey, articleAdminDetailsCommentsReducer),
  EffectsModule.forFeature([ArticleAdminDetailsCommentsEffects]),
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
export class ArticleAdminDetailsCommentsModule { }
