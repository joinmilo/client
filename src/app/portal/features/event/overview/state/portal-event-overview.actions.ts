import { createActionGroup, emptyProps } from '@ngrx/store';
import { EventFilterQueryParams } from 'src/app/core/typings/filter-params/event-filter-param';
import { Period } from 'src/app/core/typings/period';
import { EventEntity, FilterSortPaginateInput, Maybe, PageableList_EventEntity } from 'src/schema/schema';

export const PortalEventOverviewActions = createActionGroup({
  source: 'Portal Event Overview',
  events: {
    'get sponsored event': emptyProps(),
    'set sponsored event': (event: Maybe<EventEntity>) => ({ event }),

    'set overview data': (events: PageableList_EventEntity) => ({ events }),

    'update params': (params: FilterSortPaginateInput) => ({ params }),
    'update raw params': (params: EventFilterQueryParams) => ({ params }),

    'day selected': (day: Period) => ({ day }),
    'month selected': (month?: Period) => ({ month }),
  }
});
