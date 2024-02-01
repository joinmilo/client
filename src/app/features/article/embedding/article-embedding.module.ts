import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CoreModule } from 'src/app/core/core.module';
import { CardSliderComponent } from 'src/app/shared/widgets/sliders/card-slider/card-slider.component';
import { ArticleEmbeddingComponent } from './component/article-embedding.component';
import { articleEmbeddingStateKey } from './constants/article-embedding.constants';
import { ArticleEmbeddingEffects } from './state/article-embedding.effects';
import { articleEmbeddingReducer } from './state/article-embedding.reducer';

const components = [
  ArticleEmbeddingComponent,
];

const framework = [
  CommonModule,
];

const modules = [
  CoreModule,
  CardSliderComponent,
];

const libs = [
  StoreModule.forFeature(articleEmbeddingStateKey, articleEmbeddingReducer),
  EffectsModule.forFeature([ArticleEmbeddingEffects]),
];

@NgModule({
  declarations: [...components],
  imports: [
    ...framework,
    ...modules,
    ...libs,
  ],
  exports: [
    ...components
  ],
})
export class ArticleEmbeddingModule { }
