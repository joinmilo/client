import { Maybe } from 'src/schema/schema';

export enum ContestFilterQueryDefinition {
  contestTypes = 'contest-types',
}

export type ContestFilterQueryParams = {
  [ContestFilterQueryDefinition.contestTypes]?: Maybe<string[]>,
};