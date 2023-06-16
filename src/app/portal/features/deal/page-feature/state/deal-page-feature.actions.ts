import { createActionGroup, emptyProps } from '@ngrx/store';
import { DealEntity } from 'src/schema/schema';

export const DealPageFeatureActions = createActionGroup({
  source: 'Deal Page Feature',
  events: {
    'get recent deals': emptyProps(),
    'set recent deals': (deals?: DealEntity[]) => ({ deals }),
  }
});




