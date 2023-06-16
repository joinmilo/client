import { createActionGroup, emptyProps } from '@ngrx/store';
import { ContestEntity } from 'src/schema/schema';

export const ContestPageFeatureActions = createActionGroup({
  source: 'Contest Page Feature',
  events: {
    'get recent contests': emptyProps(),
    'set recent contests': (contests?: ContestEntity[]) => ({ contests }),
  }
});




