import { createActionGroup, emptyProps } from '@ngrx/store';

import { EventAttendeeEntity, FilterSortPaginateInput, Maybe, PageableList_EventAttendeeEntity } from 'src/app/core/api/generated/schema';


export const EventAdminDetailsAttendeeActions = createActionGroup({
  source: 'Event Admin Details Attendee',
  events: {
    'set attendees': (attendees: PageableList_EventAttendeeEntity) => ({ attendees }),
    'update params': (slug: Maybe<string>, params?: FilterSortPaginateInput) => ({ slug, params }),

    'delete attendee': (attendee?: Maybe<EventAttendeeEntity>) => ({ attendee }),
    'attendee deleted': emptyProps(),

    'save attendee': (attendee: Maybe<EventAttendeeEntity>) => ({ attendee }),
    'attendee saved': emptyProps()
  }
});
