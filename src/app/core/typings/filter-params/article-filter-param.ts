import { Maybe } from 'src/schema/schema';
import { FilterQueryDefinition } from './filter-param';

export enum ArticleFilterQueryDefinition {
  articleCategories = 'article-categories',
}

export type ArticleFilterQueryParams = {
  [ArticleFilterQueryDefinition.articleCategories]?: Maybe<string[]>,
  [FilterQueryDefinition.endDate]?: Maybe<string>,
  [FilterQueryDefinition.startDate]?: Maybe<string>,
};