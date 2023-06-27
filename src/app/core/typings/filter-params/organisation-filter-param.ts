import { Maybe } from 'src/schema/schema';
import { FilterQueryDefinition } from './filter-param';

export enum OrganisationFilterQueryDefinition {
  activeEvents = 'active-events',
}

export type OrganisationFilterQueryParams = {
  [OrganisationFilterQueryDefinition.activeEvents]?: Maybe<boolean | string>,
  [FilterQueryDefinition.suburbs]?: Maybe<string[]>,
};

