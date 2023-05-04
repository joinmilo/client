import { createActionGroup, emptyProps } from '@ngrx/store';
import { DisplayType } from 'src/app/core/typings/overview-display';
import { EventCommentEntity, EventEntity, FilterSortPaginateInput, Maybe } from 'src/schema/schema';

export const EventActions = createActionGroup({
  source: 'Event',
  events: {
    'get event details': (slug: string) => ({ slug }),
    'set event details': (event: Maybe<EventEntity>) => ({ event }),

    'get sponsored event': emptyProps(),
    'set sponsored event': (event: Maybe<EventEntity>) => ({ event }),

    'overview display changed': (displayType?: DisplayType) => ({ displayType }),
    'set params': (params: FilterSortPaginateInput) => ({ params }),
    'set overview data': (events: EventEntity[]) => ({ events }),

    'get event comments': (slug: string) => ({ slug }),
    'set event comments': (comments: Maybe<EventCommentEntity[]>) => ({ comments }),
  }
});




