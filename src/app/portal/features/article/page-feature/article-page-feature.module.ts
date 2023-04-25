import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CoreModule } from 'src/app/core/core.module';
import { CardModule } from 'src/app/shared/card/card.module';
import { FormModule } from 'src/app/shared/form/form.module';
import { ArticlePageFeatureComponent } from './component/article-page-feature.component';
import { articlePageFeatureStateKey } from './constants/article-page-feature.constant';
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
  CardModule,
  FormModule,
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
