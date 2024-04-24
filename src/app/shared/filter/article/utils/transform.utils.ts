
import { Maybe } from 'ngx-cinlib/core';
import { Filter } from 'ngx-cinlib/filters';
import { FilterSortPaginateInput, QueryOperator } from 'src/app/core/api/generated/schema';
import { ArticleFilterQueryDefinition } from 'src/app/core/typings/filter-params/article-filter-param';
import { FilterQueryDefinition } from 'src/app/core/typings/filter-params/filter-param';
import { createListParam } from 'src/app/core/utils/params.utils';

export const transformFn = (queryParams?: Maybe<{ [key: string]: string }>): Filter => {
  const params = {
    search: '',
    expression: {
      conjunction: {
        operands: [],
      }
    }
  } as FilterSortPaginateInput;

  if (queryParams && queryParams[FilterQueryDefinition.freeSearch]) {
    params.search = queryParams[FilterQueryDefinition.freeSearch];
  }

  if (queryParams && queryParams[ArticleFilterQueryDefinition.articleCategories]) {
    params.expression?.conjunction?.operands?.push(
      createListParam(
        queryParams[ArticleFilterQueryDefinition.articleCategories],
        'category.id'
      )
    );
  }

  if (queryParams && (queryParams[FilterQueryDefinition.startDate]
      || queryParams[FilterQueryDefinition.endDate])) {
    params.expression?.conjunction?.operands?.push(
      {
        entity: {
          path: 'modified',
          operator: QueryOperator.GreaterOrEqual,
          value: queryParams[FilterQueryDefinition.startDate]
        }
      },
      {
        entity: {
          path: 'modified',
          operator: QueryOperator.LessOrEqual,
          value: queryParams[FilterQueryDefinition.endDate]
        }
      }
    )
  }

  return params;
}