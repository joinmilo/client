import { createActionGroup, emptyProps } from '@ngrx/store';
import { DisplayType } from 'src/app/core/typings/overview-display';
import { EventEntity, FilterSortPaginateInput, Maybe, PageableList_EventEntity } from 'src/schema/schema';

export const PortalEventOverviewActions = createActionGroup({
  source: 'Portal Event Overview',
  events: {
    'get sponsored event': emptyProps(),
    'set sponsored event': (event: Maybe<EventEntity>) => ({ event }),

    'display changed': (displayType?: DisplayType) => ({ displayType }),
    'set params': (params: FilterSortPaginateInput) => ({ params }),
    'set overview data': (events: EventEntity[]) => ({ events }),

    'set table params': (params: FilterSortPaginateInput) => ({ params }),
    'set table data': (result: PageableList_EventEntity) => ({ result }),
  }
});




