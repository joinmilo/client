import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CoreModule } from 'src/app/core/core.module';
import { CardSliderComponent } from 'src/app/shared/sliders/card-slider/card-slider.component';
import { SurveyPageFeatureComponent } from './component/survey-page-feature.component';
import { surveyPageFeatureStateKey } from './constants/survey-page-feature.constants';
import { SurveyPageFeatureEffects } from './state/survey-page-feature.effects';
import { surveyPageFeatureReducer } from './state/survey-page-feature.reducer';

const components = [
  SurveyPageFeatureComponent
];

const framework = [
  CommonModule,
];

const modules = [
  CoreModule,
  CardSliderComponent,
];

const libs = [
  StoreModule.forFeature(surveyPageFeatureStateKey, surveyPageFeatureReducer),
  EffectsModule.forFeature([SurveyPageFeatureEffects]),
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
export class PortalSurveyPageFeatureModule { }
