import { Maybe } from 'src/app/core/api/generated/schema';

export enum DealFilterQueryDefinition {
  dealCategories = 'deal-categories',
  offerOnly = 'offer-only',
  searchOnly = 'search-only',
}

export type DealFilterQueryParams = {
  [DealFilterQueryDefinition.dealCategories]?: Maybe<string[]>,
  [DealFilterQueryDefinition.offerOnly]?: Maybe<boolean | string>,
  [DealFilterQueryDefinition.searchOnly]?: Maybe<boolean | string>,
};
