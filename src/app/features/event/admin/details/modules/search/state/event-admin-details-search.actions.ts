import { createActionGroup, emptyProps } from '@ngrx/store';
import { AnalyticsDto } from 'src/app/core/api/generated/schema';
import { Period } from 'src/app/core/typings/period';

export const EventAdminDetailsSearchActions = createActionGroup({
  source: 'Event Admin Details Search',
  events: {
    'init': emptyProps(),
    'set slug': (slug: string) => ({ slug }),

    'update params': (period: Period) => ({ period }),
    'set search statistics': (result?: AnalyticsDto[]) => ({ result })
  }
});
