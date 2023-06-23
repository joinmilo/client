import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CoreModule } from 'src/app/core/core.module';
import { CardSliderComponent } from 'src/app/shared/sliders/card-slider/card-slider.component';
import { ContestPageFeatureComponent } from './component/contest-page-feature.component';
import { contestPageFeatureStateKey } from './constants/contest-page-feature.constants';
import { ContestPageFeatureEffects } from './state/contest-page-feature.effects';
import { contestPageFeatureReducer } from './state/contest-page-feature.reducer';

const components = [
  ContestPageFeatureComponent
];

const framework = [
  CommonModule,
];

const modules = [
  CoreModule,
  CardSliderComponent,
];

const libs = [
  StoreModule.forFeature(contestPageFeatureStateKey, contestPageFeatureReducer),
  EffectsModule.forFeature([ContestPageFeatureEffects]),
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
export class PortalContestPageFeatureModule { }
