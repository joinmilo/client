import { Maybe } from 'src/app/core/api/generated/schema';
import { FilterQueryDefinition } from './filter-param';

export enum OrganisationFilterQueryDefinition {
  activeEvents = 'active-events',
}

export type OrganisationFilterQueryParams = {
  [OrganisationFilterQueryDefinition.activeEvents]?: Maybe<boolean | string>,
  [FilterQueryDefinition.freeSearch]?: Maybe<string>,
  [FilterQueryDefinition.suburbs]?: Maybe<string[]>,
};

