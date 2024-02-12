import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { I18nDirective } from 'ngx-cinlib/i18n';
import { SubTitleComponent } from 'ngx-cinlib/layouts/title';
import { CoreModule } from 'src/app/core/core.module';
import { CardSliderComponent } from 'src/app/shared/widgets/sliders/card-slider/card-slider.component';
import { GuestArticleEmbeddingComponent } from './component/guest-article-embedding.component';
import { guestArticleEmbeddingStateKey } from './constants/guest-article-embedding.constants';
import { GuestArticleEmbeddingEffects } from './state/guest-article-page-feature.effects';
import { articleEmbeddingReducer } from './state/guest-article-page-feature.reducer';

const components = [
  GuestArticleEmbeddingComponent
];

const framework = [
  CommonModule,
  RouterModule,
];

const materials = [
  MatButtonModule,
  MatCardModule,
];

const modules = [
  CoreModule,
  CardSliderComponent,
];

const libs = [
  StoreModule.forFeature(guestArticleEmbeddingStateKey, articleEmbeddingReducer),
  EffectsModule.forFeature([GuestArticleEmbeddingEffects]),

  I18nDirective,
  SubTitleComponent,
]

@NgModule({
  declarations: [...components],
  imports: [
    ...framework,
    ...materials,
    ...modules,
    ...libs,
  ],
  exports: [...components],
})
export class GuestArticleEmbeddingModule { }
