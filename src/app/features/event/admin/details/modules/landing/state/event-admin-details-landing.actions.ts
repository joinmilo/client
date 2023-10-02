import { createActionGroup } from '@ngrx/store';
import { EventEntity, EventScheduleEntity, Maybe } from 'src/app/core/api/generated/schema';

export const EventAdminDetailsLandingActions = createActionGroup({
  source: 'Event Admin Details Landing',
  events: {
    'get details': (slug: Maybe<string>) => ({ slug }),
    'set details': (event: Maybe<EventEntity>) => ({ event }),

    'get schedules': (event_id: Maybe<string> | undefined, startDate: Maybe<string>, endDate: Maybe<string>) => ({ event_id, startDate, endDate }),
    'set schedules': (schedules: Maybe<EventScheduleEntity[]>) => ({ schedules }),
  }
});
