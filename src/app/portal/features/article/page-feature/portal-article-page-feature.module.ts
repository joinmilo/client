import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CoreModule } from 'src/app/core/core.module';
import { RadioButtonFormModule } from 'src/app/shared/form/radio-button/radio-button-form.module';
import { CardSliderComponent } from 'src/app/shared/sliders/card-slider/card-slider.component';
import { ArticlePageFeatureComponent } from './component/article-page-feature.component';
import { articlePageFeatureStateKey } from './constants/article-page-feature.constants';
import { ArticlePageFeatureEffects } from './state/article-page-feature.effects';
import { articlePageFeatureReducer } from './state/article-page-feature.reducer';

const components = [
  ArticlePageFeatureComponent
];

const framework = [
  CommonModule,
];

const modules = [
  CoreModule,
  CardSliderComponent,
  RadioButtonFormModule,
];

const libs = [
  StoreModule.forFeature(articlePageFeatureStateKey, articlePageFeatureReducer),
  EffectsModule.forFeature([ArticlePageFeatureEffects]),
]

@NgModule({
  declarations: [...components],
  imports: [
    ...framework,
    ...modules,
    ...libs,
  ],
  exports: [...components],
})
export class PortalArticlePageFeatureModule { }
