import { SurveyFilterQueryDefinition, SurveyFilterQueryParams } from 'src/app/core/typings/filter-param';
import { FilterSortPaginateInput, QueryOperator } from 'src/schema/schema';

export const createSurveyParams = (queryParams: SurveyFilterQueryParams) => {
  const params = {
    expression: {
      conjunction: {
        operands: [],
      }
    }
  } as FilterSortPaginateInput;

   if (!queryParams[SurveyFilterQueryDefinition.past]) {
    params.expression?.conjunction?.operands?.push({
      entity: {
        path: 'dueDate',
        operator: QueryOperator.GreaterOrEqual,
        value: new Date().toISOString()
      }
    });
  }

  return params;
}