import { createActionGroup, emptyProps } from '@ngrx/store';
import { EventCategoryEntity, EventEntity, EventEntityInput, EventTargetGroupEntity, Maybe, OrganisationEntity } from 'src/app/core/api/generated/schema';

export const EventAdminFormActions = createActionGroup({
  source: 'Event Admin Form',
  events: {
    'get event': (slug: Maybe<string>) => ({ slug }),
    'event retrieved': (event: Maybe<EventEntity>) => ({ event }),

    'get categories': emptyProps(),
    'set categories': (categories: Maybe<EventCategoryEntity[]>) => ({ categories }),

    'get targetGroups': emptyProps(),
    'set targetGroups': (targetGroups: Maybe<EventTargetGroupEntity[]>) => ({ targetGroups }),

    'get user organisations': emptyProps(),
    'set user organisations': (organisations: Maybe<OrganisationEntity[]>) => ({ organisations }),

    'cancelled': emptyProps(),

    'save': (event: EventEntityInput) => ({ event }),
    'saved': emptyProps(),
  }
});
