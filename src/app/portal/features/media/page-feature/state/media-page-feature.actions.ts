import { createActionGroup, emptyProps } from '@ngrx/store';
import { InfoMediaEntity } from 'src/schema/schema';

export const MediaPageFeatureActions = createActionGroup({
  source: 'Media Page Feature',
  events: {
    'get recent media': emptyProps(),
    'set recent media': (media?: InfoMediaEntity[]) => ({ media }),
  }
});
