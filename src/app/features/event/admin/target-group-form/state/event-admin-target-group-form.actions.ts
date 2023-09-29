import { createActionGroup, emptyProps } from '@ngrx/store';
import { Maybe } from 'graphql/jsutils/Maybe';
import { EventTargetGroupEntity, EventTargetGroupEntityInput } from 'src/app/core/api/generated/schema';

export const EventAdminTargetGroupFormActions = createActionGroup({
  source: 'Event Admin Details Landing',
  events: {
    'save': (targetGroup: EventTargetGroupEntityInput) => ({ targetGroup }),
    'saved': emptyProps(),
    'cancelled': emptyProps(),

    'get targetGroup': (entityId: string) => ({ entityId }),
    'targetGroup retrieved': (entity?: Maybe<EventTargetGroupEntity>) => ({ entity }),
  }
});
