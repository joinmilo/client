import { createActionGroup } from '@ngrx/store';
import { Month } from 'src/app/core/typings/month';
import { Maybe, ScheduleEntity } from 'src/schema/schema';

export const CalendarActions = createActionGroup({
  source: 'Calendar',
  events: {
    'month changed': (month?: Month) => ({ month }),

    'set schedules': (schedules: Maybe<ScheduleEntity>[]) => ({ schedules }),
  }
});




