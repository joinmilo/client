import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CoreModule } from 'src/app/core/core.module';
import { AnalyticsVisitorsComponent } from 'src/app/shared/widgets/analytics/components/visitors/analytics-visitors.component';
import { ArticleAdminDetailsVisitorsComponent } from './component/article-admin-details-visitors.component';
import { articleAdminDetailsVisitorsStateKey } from './constants/article-admin-details-visitors.constants';
import { ArticleAdminDetailsVisitorsEffects } from './state/article-admin-details-visitors.effects';
import { articleAdminDetailsVisitorsReducer } from './state/article-admin-details-visitors.reducer';

const components = [
  ArticleAdminDetailsVisitorsComponent,
]

const framework = [
  CommonModule,
];

const modules = [
  CoreModule,
  AnalyticsVisitorsComponent,
];

const libs = [
  StoreModule.forFeature(articleAdminDetailsVisitorsStateKey, articleAdminDetailsVisitorsReducer),
  EffectsModule.forFeature([ArticleAdminDetailsVisitorsEffects]),
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
export class ArticleAdminDetailsVisitorsModule { }
