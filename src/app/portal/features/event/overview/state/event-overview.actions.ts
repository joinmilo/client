import { createActionGroup, emptyProps } from '@ngrx/store';
import { DisplayType } from 'src/app/core/typings/overview-display';
import { EventEntity, FilterSortPaginateInput, Maybe } from 'src/schema/schema';

export const PortalEventOverviewActions = createActionGroup({
  source: 'Portal Event Overview',
  events: {
    'get sponsored event': emptyProps(),
    'set sponsored event': (event: Maybe<EventEntity>) => ({ event }),

    'overview display changed': (displayType?: DisplayType) => ({ displayType }),
    'set params': (params: FilterSortPaginateInput) => ({ params }),
    'set overview data': (events: EventEntity[]) => ({ events }),
  }
});




