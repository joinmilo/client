import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CoreModule } from 'src/app/core/core.module';
import { MediaModule } from 'src/app/shared/widgets/media/media.module';
import { MediaPageFeatureComponent } from './components/media-page-feature.component';
import { mediaPageFeatureStateKey } from './constants/media-page-feature.constants';
import { MediaPageFeatureEffects } from './state/media-page-feature.effects';
import { mediaPageFeatureReducer } from './state/media-page-feature.reducer';

const components = [
  MediaPageFeatureComponent
];

const framework = [
  CommonModule,
];

const modules = [
  CoreModule,
  MediaModule
];

const libs = [
  StoreModule.forFeature(mediaPageFeatureStateKey, mediaPageFeatureReducer),
  EffectsModule.forFeature([MediaPageFeatureEffects]),
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
export class PortalMediaPageFeatureModule { }
