import { Maybe } from 'src/app/core/api/generated/schema';
import { FilterQueryDefinition } from './filter-param';

export enum ArticleFilterQueryDefinition {
  articleCategories = 'article-categories',
}

export type ArticleFilterQueryParams = {
  [ArticleFilterQueryDefinition.articleCategories]?: Maybe<string[]>,
  [FilterQueryDefinition.endDate]?: Maybe<string>,
  [FilterQueryDefinition.freeSearch]?: Maybe<string>,
  [FilterQueryDefinition.startDate]?: Maybe<string>,
};