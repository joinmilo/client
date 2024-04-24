import { Maybe } from 'ngx-cinlib/core';
import { Filter } from 'ngx-cinlib/filters';
import { FilterSortPaginateInput } from 'src/app/core/api/generated/schema';
import { DealFilterQueryDefinition } from 'src/app/core/typings/filter-params/deal-filter-param';

export const transformFn = (queryParams?: Maybe<{ [key: string]: string }>): Filter => {
  const params = {
    search: '',
    expression: {
      conjunction: {
        operands: [],
      }
    }
  } as FilterSortPaginateInput;

  if (queryParams && queryParams[DealFilterQueryDefinition.offerOnly]) {
    params.expression?.conjunction?.operands?.push({
      entity: {
        path: 'offer',
        value: 'true'
      }
    });
  } else if (queryParams && queryParams[DealFilterQueryDefinition.searchOnly]) {
    params.expression?.conjunction?.operands?.push({
      entity: {
        path: 'offer',
        value: 'false'
      }
    });
  }

  return params;
}