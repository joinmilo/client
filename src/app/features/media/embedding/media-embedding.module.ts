import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { MediaSliderComponent } from 'ngx-cinlib/media/elements';
import { CoreModule } from 'src/app/core/core.module';
import { MediaEmbeddingComponent } from './components/media-embedding.component';
import { mediaEmbeddingStateKey } from './constants/media-embedding.constants';
import { MediaEmbeddingEffects } from './state/media-embedding.effects';
import { mediaEmbeddingReducer } from './state/media-embedding.reducer';

const components = [
  MediaEmbeddingComponent
];

const framework = [
  CommonModule,
];

const modules = [
  CoreModule,
];

const libs = [
  StoreModule.forFeature(mediaEmbeddingStateKey, mediaEmbeddingReducer),
  EffectsModule.forFeature([MediaEmbeddingEffects]),

  MediaSliderComponent,
];

@NgModule({
  declarations: [...components],
  imports: [
    ...framework,
    ...modules,
    ...libs,
  ],
  exports: [...components],
})
export class MediaEmbeddingModule { }
