import { createActionGroup } from '@ngrx/store';
import { Period } from 'src/app/core/typings/period';
import { EventEntity, Maybe, ScheduleEntity } from 'src/schema/schema';

export const PortalCalendarActions = createActionGroup({
  source: 'Portal Calendar',
  events: {
    'day selected': (day: Period) => ({ day }),
    'month selected': (month?: Period) => ({ month }),

    'set events': (events: Maybe<EventEntity>[]) => ({ events }),
    'set schedules': (schedules: Maybe<ScheduleEntity>[]) => ({ schedules }),
  }
});




