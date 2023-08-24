
import { FilterSortPaginateInput, QueryOperator } from 'src/app/core/api/generated/schema';
import { ArticleFilterQueryDefinition, ArticleFilterQueryParams } from 'src/app/core/typings/filter-params/article-filter-param';
import { FilterQueryDefinition } from 'src/app/core/typings/filter-params/filter-param';
import { createListParam } from 'src/app/core/utils/params.utils';

export const createArticleParams = (queryParams?: ArticleFilterQueryParams) => {
  const params = {
    expression: {
      conjunction: {
        operands: [],
      }
    }
  } as FilterSortPaginateInput;

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
          value: queryParams?.start
        }
      },
      {
        entity: {
          path: 'modified',
          operator: QueryOperator.LessOrEqual,
          value: queryParams?.end
        }
      }
    )
  }

  return params;
}