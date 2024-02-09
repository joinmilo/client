import { createActionGroup } from '@ngrx/store';
import { Period } from 'ngx-cinlib/core';
import { EventEntity, EventScheduleEntity, Maybe } from 'src/app/core/api/generated/schema';
import { EventFilterQueryParams } from 'src/app/core/typings/filter-params/event-filter-param';

export const EventCalendarActions = createActionGroup({
  source: 'Event Calendar',
  events: {
    'day selected': (day: Period) => ({ day }),
    'set events': (events: Maybe<EventEntity>[]) => ({ events }),
    
    'month selected': (month?: Period) => ({ month }),
    'filter updated': (params?: Maybe<EventFilterQueryParams>) => ({ params }),
    'set schedules': (schedules: Maybe<EventScheduleEntity>[]) => ({ schedules }),
  }
});