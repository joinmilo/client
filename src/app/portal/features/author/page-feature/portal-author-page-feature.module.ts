import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CoreModule } from 'src/app/core/core.module';
import { CardSliderComponent } from 'src/app/shared/sliders/card-slider/card-slider.component';
import { AuthorPageFeatureComponent } from './component/author-page-feature.component';
import { authorPageFeatureStateKey } from './constants/author-page-feature.constants';
import { AuthorPageFeatureEffects } from './state/author-page-feature.effects';
import { authorPageFeatureReducer } from './state/author-page-feature.reducer';

const components = [
  AuthorPageFeatureComponent
];

const framework = [
  CommonModule,
];

const modules = [
  CoreModule,
  CardSliderComponent,
];

const libs = [
  StoreModule.forFeature(authorPageFeatureStateKey, authorPageFeatureReducer),
  EffectsModule.forFeature([AuthorPageFeatureEffects]),
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
export class PortalAuthorPageFeatureModule { }
