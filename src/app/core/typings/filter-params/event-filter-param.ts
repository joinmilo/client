import { Maybe } from 'src/schema/schema';
import { FilterQueryDefinition } from './filter-param';

export enum EventFilterQueryDefinition {
  eventCategories = 'event-categories',
  freeOnly = 'free-only',
  past = 'past',
  targetGroups = 'targetgroups',
}

export type EventFilterQueryParams = {
  [EventFilterQueryDefinition.eventCategories]?: Maybe<string[]>,
  [FilterQueryDefinition.endDate]?: Maybe<string>,
  [EventFilterQueryDefinition.freeOnly]?: Maybe<boolean | string>,
  [FilterQueryDefinition.startDate]?: Maybe<string>,
  [EventFilterQueryDefinition.past]?: Maybe<boolean | string>,
  [EventFilterQueryDefinition.targetGroups]?: Maybe<string[]>,
  [FilterQueryDefinition.suburbs]?: Maybe<string[]>,
};
