import { createActionGroup, emptyProps } from '@ngrx/store';
import { Maybe } from 'graphql/jsutils/Maybe';
import { EventCategoryEntity, EventCategoryEntityInput } from 'src/app/core/api/generated/schema';

export const EventAdminCategoryFormActions = createActionGroup({
  source: 'Event Admin Details Landing',
  events: {
    'save': (category: EventCategoryEntityInput) => ({ category }),
    'saved': emptyProps(),
    'cancelled': emptyProps(),

    'get category': (entityId: string) => ({ entityId }),
    'category retrieved': (entity?: Maybe<EventCategoryEntity>) => ({ entity }),
  }
});
