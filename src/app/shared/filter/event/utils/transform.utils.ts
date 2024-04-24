import { Maybe } from 'ngx-cinlib/core';
import { Filter } from 'ngx-cinlib/filters';
import { QueryOperator } from 'src/app/core/api/generated/schema';
import { EventFilterQueryDefinition } from 'src/app/core/typings/filter-params/event-filter-param';
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
  } as Filter;

  if (queryParams && queryParams[FilterQueryDefinition.freeSearch]) {
    params.search = queryParams[FilterQueryDefinition.freeSearch];
  }

  if (queryParams && queryParams[EventFilterQueryDefinition.eventCategories]) {

    params.expression?.conjunction?.operands?.push(
      createListParam(
        queryParams[EventFilterQueryDefinition.eventCategories],
        'category.id'
      )
    );
  }

  if (queryParams && queryParams[FilterQueryDefinition.suburbs]) {
    params.expression?.conjunction?.operands?.push(
      createListParam(
        queryParams[FilterQueryDefinition.suburbs],
        'address.suburb.id'
      )
    );
  }

  if (queryParams && queryParams[EventFilterQueryDefinition.targetGroups]) {
    params.expression?.conjunction?.operands?.push(
      createListParam(
        queryParams[EventFilterQueryDefinition.targetGroups],
        'targetGroups.id'
      )
    );
  }

  if (!queryParams || !queryParams[EventFilterQueryDefinition.past]) {
    queryParams && queryParams[FilterQueryDefinition.startDate]
      || queryParams && queryParams[FilterQueryDefinition.endDate]
      ? params.expression?.conjunction?.operands?.push(
          {
            entity: {
              path: 'schedules.startDate',
              operator: QueryOperator.GreaterOrEqual,
              value: queryParams[FilterQueryDefinition.startDate]
            }
          },
          {
            entity: {
              path: 'schedules.startDate',
              operator: QueryOperator.LessOrEqual,
              value: queryParams[FilterQueryDefinition.endDate]
            }
          }
        )
      : params.expression?.conjunction?.operands?.push({
          entity: {
            path: 'schedules.startDate',
            operator: QueryOperator.GreaterOrEqual,
            value: new Date().toISOString()
          }
        });
  }

  if (queryParams && queryParams[EventFilterQueryDefinition.freeOnly]) {
    params.expression?.conjunction?.operands?.push({
      entity: {
        path: 'entryFee',
        operator: QueryOperator.Equal,
        value: null
      }
    });
  }

  return params;
}