import { createActionGroup } from '@ngrx/store';
import { AnalyticsDto, IntervalFilter } from 'src/app/core/api/generated/schema';
import { Period } from 'src/app/core/typings/period';

export const EventAdminDetailsVisitorsActions = createActionGroup({
  source: 'Event Admin Details Visitors',
  events: {
    'init': (
      slug: string,
      period: Period,
      interval: IntervalFilter) => ({ slug, period, interval }),
    'update period': (period: Period) => ({ period }),
    'update interval': (interval: IntervalFilter) => ({ interval }),
    'set statistics': (result?: AnalyticsDto[]) => ({ result })
  }
});
