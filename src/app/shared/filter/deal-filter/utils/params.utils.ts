import { DealFilterQueryDefinition, DealFilterQueryParams } from 'src/app/core/typings/filter-params/deal-filter-param';
import { FilterSortPaginateInput } from 'src/schema/schema';

export const createDealParams = (queryParams: DealFilterQueryParams) => {
  const params = {
    expression: {
      conjunction: {
        operands: [],
      }
    }
  } as FilterSortPaginateInput;

  if (queryParams[DealFilterQueryDefinition.offerOnly]) {
    params.expression?.conjunction?.operands?.push({
      entity: {
        path: 'offer',
        value: 'true'
      }
    });
  } else if (queryParams[DealFilterQueryDefinition.searchOnly]) {
    params.expression?.conjunction?.operands?.push({
      entity: {
        path: 'offer',
        value: 'false'
      }
    });
  }

  return params;
}