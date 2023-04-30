import { createActionGroup, emptyProps } from '@ngrx/store';
import { EventDisplayType } from 'src/app/core/state/display-type';
import { EventEntity, FilterSortPaginateInput, Maybe } from 'src/schema/schema';

export const PortalEventDetailsActions = createActionGroup({
  source: 'Portal Event Details',
  events: {
    'get event details': (slug: string) => ({ slug }),
    'set event details': (event: Maybe<EventEntity>) => ({ event }),

    'get sponsored event': emptyProps(),
    'set sponsored event': (event: Maybe<EventEntity>) => ({ event }),

    'overview display changed': (displayType: EventDisplayType) => ({ displayType }),
    'set params': (params: FilterSortPaginateInput) => ({ params }),
    'set overview data': (events: EventEntity[]) => ({ events }),
  }
});




