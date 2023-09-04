import { createActionGroup, emptyProps } from '@ngrx/store';
import { EventEntity, FilterSortPaginateInput, Maybe, PageableList_EventEntity } from 'src/app/core/api/generated/schema';

export const EventAdminOverviewActions = createActionGroup({
  source: 'Event Admin Overview',
  events: {

    'set overview data': (events: PageableList_EventEntity) => ({ events }),

    'update params': (params: FilterSortPaginateInput) => ({ params }),

    'delete event': (event?: Maybe<EventEntity>) => ({ event }),
    'event deleted': emptyProps(),

    'sponsor event': (event?: Maybe<EventEntity>) => ({ event }),
    'event sponsored': emptyProps(),
  }
});
