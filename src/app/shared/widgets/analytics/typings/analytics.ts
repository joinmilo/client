import { Period } from 'ngx-cinlib/core';
import { IntervalFilter } from 'src/app/core/api/generated/schema';

export interface AnalyticsParams {
  period?: Period,
  interval: IntervalFilter,
}