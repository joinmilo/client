import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CoreModule } from 'src/app/core/core.module';
import { AnalyticsRatingComponent } from 'src/app/shared/widgets/analytics/components/rating/analytics-rating.component';
import { ArticleAdminDetailsRatingComponent } from './component/article-admin-details-rating.component';
import { articleAdminDetailsRatingStateKey } from './constants/article-admin-details-rating.constants';
import { ArticleAdminDetailsRatingEffects } from './state/article-admin-details-rating.effects';
import { articleAdminDetailsRatingReducer } from './state/article-admin-details-rating.reducer';

const components = [
  ArticleAdminDetailsRatingComponent,
];

const framework = [
  CommonModule,
];

const modules = [
  CoreModule,
  AnalyticsRatingComponent,
];

const libs = [
  StoreModule.forFeature(articleAdminDetailsRatingStateKey, articleAdminDetailsRatingReducer),
  EffectsModule.forFeature([ArticleAdminDetailsRatingEffects]),
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
export class ArticleAdminDetailsRatingModule { }
