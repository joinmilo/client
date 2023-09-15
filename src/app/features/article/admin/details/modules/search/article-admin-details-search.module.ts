import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CoreModule } from 'src/app/core/core.module';
import { AnalyticsSearchComponent } from 'src/app/shared/widgets/analytics/components/search/analytics-search.component';
import { ArticleAdminDetailsSearchComponent } from './component/article-admin-details-search.component';
import { articleAdminDetailsSearchStateKey } from './constants/article-admin-details-search.constants';
import { ArticleAdminDetailsSearchEffects } from './state/article-admin-details-search.effects';
import { articleAdminDetailsSearchReducer } from './state/article-admin-details-search.reducer';

const components = [
  ArticleAdminDetailsSearchComponent,
]

const framework = [
  CommonModule,
];

const modules = [
  AnalyticsSearchComponent,
  CoreModule,
];

const libs = [
  StoreModule.forFeature(articleAdminDetailsSearchStateKey, articleAdminDetailsSearchReducer),
  EffectsModule.forFeature([ArticleAdminDetailsSearchEffects]),
];

@NgModule({
  declarations: [...components],
  imports: [
    ...framework,
    ...libs,
    ...modules,
  ],
  exports: [...components],
})
export class ArticleAdminDetailsSearchModule { }
