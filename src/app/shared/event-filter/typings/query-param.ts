import { DisplayType } from 'src/app/core/typings/overview-display';
import { displayQueryParam } from 'src/app/portal/features/event/overview/constants/portal-event-overview.constant';
import { Maybe } from 'src/schema/schema';
import { categoryGroupQueryParam, currentOnlyQueryParam, freeOnlyQueryParam, suburbGroupQueryParam, targetGroupQueryParam } from '../constants/event-filter.constants';

export type EventQueryParams = {
  [displayQueryParam]?: DisplayType,
  [targetGroupQueryParam]?: Maybe<string[]>,
  [suburbGroupQueryParam]?: Maybe<string[]>,
  [categoryGroupQueryParam]?: Maybe<string[]>,
  [freeOnlyQueryParam]?: Maybe<string[]>,
  [currentOnlyQueryParam]?: Maybe<string[]>,
};