import { createActionGroup } from '@ngrx/store';
import { FilterSortPaginateInput, PageableList_EventEntity } from 'src/schema/schema';

export const EventAdminOverviewActions = createActionGroup({
  source: 'Event Admin Overview',
  events: {

    'set overview data': (events: PageableList_EventEntity) => ({ events }),

    'update params': (params: FilterSortPaginateInput) => ({ params }),
  }
});
