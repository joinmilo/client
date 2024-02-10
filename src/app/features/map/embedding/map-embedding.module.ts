import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SubTitleComponent } from 'ngx-cinlib/layouts/title';
import { CoreModule } from 'src/app/core/core.module';
import { MapModule } from 'src/app/shared/widgets/map/map.module';
import { CardSliderComponent } from 'src/app/shared/widgets/sliders/card-slider/card-slider.component';
import { MapEmbeddingComponent } from './component/map-embedding.component';
import { mapEmbeddingStateKey } from './constants/map-embedding.constants';
import { MapEmbeddingEffects } from './state/map-embedding.effects';
import { mapEmbeddingReducer } from './state/map-embedding.reducer';

const components = [
  MapEmbeddingComponent,
];

const framework = [
  CommonModule,
];

const modules = [
  CoreModule,
  CardSliderComponent,
  MapModule,
];

const libs = [
  StoreModule.forFeature(mapEmbeddingStateKey, mapEmbeddingReducer),
  EffectsModule.forFeature([MapEmbeddingEffects]),

  SubTitleComponent,
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
export class MapEmbeddingModule { }
