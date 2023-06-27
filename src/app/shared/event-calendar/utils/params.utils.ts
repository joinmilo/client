import { EventFilterQueryDefinition, EventFilterQueryParams } from 'src/app/core/typings/filter-params/event-filter-param';
import { FilterQueryDefinition } from 'src/app/core/typings/filter-params/filter-param';
import { Period } from 'src/app/core/typings/period';
import { createListParam } from 'src/app/core/utils/params.utils';
import { FilterSortPaginateInput, Maybe, QueryOperator } from 'src/schema/schema';

export const createCalendarParams = (
  queryParams?: Maybe<EventFilterQueryParams>,
  period?: Maybe<Period>,
  isEvent = true,
  ) => {
  const params = {
    expression: {
      conjunction: {
        operands: [],
      }
    }
  } as FilterSortPaginateInput;

  if (queryParams && queryParams[EventFilterQueryDefinition.eventCategories]) {

    params.expression?.conjunction?.operands?.push(
      createListParam(
        queryParams[EventFilterQueryDefinition.eventCategories],
        isEvent ? 'category.id' : 'event.category.id'
      )
    );
  }

  if (queryParams && queryParams[FilterQueryDefinition.suburbs]) {
    params.expression?.conjunction?.operands?.push(
      createListParam(
        queryParams[FilterQueryDefinition.suburbs],
        isEvent ? 'address.suburb.id' : 'event.address.suburb.id'
      )
    );
  }

  if (queryParams && queryParams[EventFilterQueryDefinition.targetGroups]) {
    params.expression?.conjunction?.operands?.push(
      createListParam(
        queryParams[EventFilterQueryDefinition.targetGroups],
        isEvent ? 'targetGroups.id' : 'event.targetGroups.id'
      )
    );
  }

  if (period) {
    params.expression?.conjunction?.operands?.push(
      {
        entity: {
          path: isEvent ? 'schedules.startDate' : 'startDate',
          operator: QueryOperator.GreaterOrEqual,
          value: period?.startDate.toISOString(),
        }
      },
      {
        entity: {
          path: isEvent ? 'schedules.startDate' : 'startDate',
          operator: QueryOperator.LessOrEqual,
          value: period?.endDate.toISOString(),
        }
      }
    )
  }

  if (queryParams && queryParams[EventFilterQueryDefinition.freeOnly]) {
    params.expression?.conjunction?.operands?.push({
      entity: {
        path: isEvent ? 'entryFee' : 'event.entryFee',
        operator: QueryOperator.Equal,
        value: null
      }
    });
  }

  return params;
}