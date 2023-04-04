import { createActionGroup, emptyProps } from '@ngrx/store';
import { EventEntity } from 'src/schema/schema';

export const EventPageFeatureActions = createActionGroup({
  source: 'Event Page Feature',
  events: {
    'get recent events': emptyProps(),
    'set recent events': (events?: EventEntity[]) => ({ events }),
  }
});




