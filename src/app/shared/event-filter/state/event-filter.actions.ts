import { createActionGroup, emptyProps } from '@ngrx/store';
import { EventTargetGroupEntity } from 'src/schema/schema';

export const EventFilterActions = createActionGroup({
  source: 'Event Filter',
  events: {
    'get target groups': emptyProps(),
    'set target groups': (result : EventTargetGroupEntity[]) => ({ result }),
  }
});




