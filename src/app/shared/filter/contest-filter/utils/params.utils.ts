import { ContestFilterQueryDefinition, ContestFilterQueryParams } from 'src/app/core/typings/filter-param';
import { createListParam } from 'src/app/core/utils/params.utils';
import { FilterSortPaginateInput } from 'src/schema/schema';

export const createContestParams = (queryParams: ContestFilterQueryParams) => {
  const params = {
    expression: {
      conjunction: {
        operands: [],
      }
    }
  } as FilterSortPaginateInput;

  if (queryParams[ContestFilterQueryDefinition.contestTypes]) {

    params.expression?.conjunction?.operands?.push(
      createListParam(
        queryParams[ContestFilterQueryDefinition.contestTypes],
        'type.id'
      )
    );
  }

  return params;
}