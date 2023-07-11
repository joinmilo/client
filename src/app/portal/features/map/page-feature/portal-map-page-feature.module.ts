import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CoreModule } from 'src/app/core/core.module';
import { RadioButtonFormModule } from 'src/app/shared/form/radio-button/radio-button-form.module';
import { MapModule } from 'src/app/shared/map/map.module';
import { CardSliderComponent } from 'src/app/shared/sliders/card-slider/card-slider.component';
import { TitleModule } from 'src/app/shared/title/title.module';
import { MapPageFeatureComponent } from './component/map-page-feature.component';
import { mapPageFeatureStateKey } from './constants/map-page-feature.constants';
import { MapPageFeatureEffects } from './state/map-page-feature.effects';
import { mapPageFeatureReducer } from './state/map-page-feature.reducer';

const components = [
  MapPageFeatureComponent,
];

const framework = [
  CommonModule,
];

const modules = [
  CoreModule,
  CardSliderComponent,
  MapModule,
  RadioButtonFormModule,
  TitleModule,
];

const libs = [
  FontAwesomeModule,
  StoreModule.forFeature(mapPageFeatureStateKey, mapPageFeatureReducer),
  EffectsModule.forFeature([MapPageFeatureEffects]),
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
export class PortalMapPageFeatureModule { }
