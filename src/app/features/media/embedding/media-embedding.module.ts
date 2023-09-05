import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CoreModule } from 'src/app/core/core.module';
import { MediaModule } from 'src/app/shared/media/media.module';
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
  MediaModule,
];

const libs = [
  StoreModule.forFeature(mediaEmbeddingStateKey, mediaEmbeddingReducer),
  EffectsModule.forFeature([MediaEmbeddingEffects]),
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
