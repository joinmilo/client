import { createActionGroup } from '@ngrx/store';
import { AnalyticsDto, IntervalFilter } from 'src/app/core/api/generated/schema';
import { Period } from 'src/app/core/typings/period';

export const ArticleAdminDetailsSearchActions = createActionGroup({
  source: 'Article Admin Details Search',
  events: {
    'init': (
      slug: string,
      period: Period,
      interval: IntervalFilter) => ({ slug, period, interval }),
    'update period': (period: Period) => ({ period }),
    'update interval': (interval: IntervalFilter) => ({ interval }),
    'set search statistics': (result?: AnalyticsDto[]) => ({ result })
  }
});
