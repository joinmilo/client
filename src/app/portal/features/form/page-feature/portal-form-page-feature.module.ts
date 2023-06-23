import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CoreModule } from 'src/app/core/core.module';
import { CardSliderComponent } from 'src/app/shared/sliders/card-slider/card-slider.component';
import { FormPageFeatureComponent } from './component/form-page-feature.component';
import { formPageFeatureStateKey } from './constants/form-page-feature.constants';
import { FormPageFeatureEffects } from './state/form-page-feature.effects';
import { formPageFeatureReducer } from './state/form-page-feature.reducer';

const components = [
  FormPageFeatureComponent
];

const framework = [
  CommonModule,
];

const modules = [
  CoreModule,
  CardSliderComponent,
];

const libs = [
  StoreModule.forFeature(formPageFeatureStateKey, formPageFeatureReducer),
  EffectsModule.forFeature([FormPageFeatureEffects]),
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
export class PortalFormPageFeatureModule { }
