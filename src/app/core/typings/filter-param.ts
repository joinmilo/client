import { Maybe } from 'src/schema/schema';

export enum FilterQueryDefinition {
  suburbs = 'suburbs',
  endDate = 'end',
  startDate = 'start',
}

export enum ArticleFilterQueryDefinition {
  articleCategories = 'article-categories',
}

export enum ContestFilterQueryDefinition {
  contestTypes = 'contest-types',
}

export enum EventFilterQueryDefinition {
  eventCategories = 'event-categories',
  freeOnly = 'free-only',
  past = 'past',
  targetGroups = 'targetgroups',
}

export enum DealFilterQueryDefinition {
  dealCategories = 'deal-categories',
  offerOnly = 'offer-only',
  searchOnly = 'search-only',
}

export enum OrganisationFilterQueryDefinition {
  activeEvents = 'active-events',
}

export enum SurveyFilterQueryDefinition {
  past = 'past',
}

export type ArticleFilterQueryParams = {
  [ArticleFilterQueryDefinition.articleCategories]?: Maybe<string[]>,
  [FilterQueryDefinition.endDate]?: Maybe<string>,
  [FilterQueryDefinition.startDate]?: Maybe<string>,
};

export type ContestFilterQueryParams = {
  [ContestFilterQueryDefinition.contestTypes]?: Maybe<string[]>,
};

export type EventFilterQueryParams = {
  [EventFilterQueryDefinition.eventCategories]?: Maybe<string[]>,
  [FilterQueryDefinition.endDate]?: Maybe<string>,
  [EventFilterQueryDefinition.freeOnly]?: Maybe<boolean | string>,
  [FilterQueryDefinition.startDate]?: Maybe<string>,
  [EventFilterQueryDefinition.past]?: Maybe<boolean | string>,
  [EventFilterQueryDefinition.targetGroups]?: Maybe<string[]>,
  [FilterQueryDefinition.suburbs]?: Maybe<string[]>,
};

export type DealFilterQueryParams = {
  [DealFilterQueryDefinition.dealCategories]?: Maybe<string[]>,
  [DealFilterQueryDefinition.offerOnly]?: Maybe<boolean | string>,
  [DealFilterQueryDefinition.searchOnly]?: Maybe<boolean | string>,
};

export type OrganisationFilterQueryParams = {
  [OrganisationFilterQueryDefinition.activeEvents]?: Maybe<boolean | string>,
  [FilterQueryDefinition.suburbs]?: Maybe<string[]>,
};

export type SurveyFilterQueryParams = {
  [SurveyFilterQueryDefinition.past]?: Maybe<boolean | string>,
};

