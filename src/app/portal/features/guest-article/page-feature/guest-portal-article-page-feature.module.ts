import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CoreModule } from 'src/app/core/core.module';
import { CardSliderComponent } from 'src/app/shared/sliders/card-slider/card-slider.component';
import { TitleModule } from 'src/app/shared/title/title.module';
import { GuestArticlePageFeatureComponent } from './component/guest-article-page-feature.component';
import { guestArticlePageFeatureStateKey } from './constants/guest-article-page-feature.constants';
import { ArticlePageFeatureEffects } from './state/guest-article-page-feature.effects';
import { articlePageFeatureReducer } from './state/guest-article-page-feature.reducer';

const components = [
  GuestArticlePageFeatureComponent
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
  TitleModule,
];

const libs = [
  StoreModule.forFeature(guestArticlePageFeatureStateKey, articlePageFeatureReducer),
  EffectsModule.forFeature([ArticlePageFeatureEffects]),
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
export class PortalGuestArticlePageFeatureModule { }
