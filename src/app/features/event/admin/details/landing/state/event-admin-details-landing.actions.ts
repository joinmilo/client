import { createActionGroup } from '@ngrx/store';
import { Maybe } from 'graphql/jsutils/Maybe';
import { EventEntity, EventScheduleEntity } from 'src/schema/schema';

export const EventAdminDetailsLandingActions = createActionGroup({
  source: 'Event Admin Details',
  events: {
    'get details': (slug: Maybe<string>) => ({ slug }),
    'set details': (event: Maybe<EventEntity>) => ({ event }),

    'get schedules': (event_id: Maybe<string> | undefined, startDate: Maybe<string>, endDate: Maybe<string>) => ({ event_id, startDate, endDate }),
    'set schedules': (schedules: Maybe<EventScheduleEntity[]>) => ({ schedules }),
  }
});
