import { createActionGroup, emptyProps } from '@ngrx/store';
import { EventCategoryEntity, FilterSortPaginateInput, Maybe, PageableList_EventCategoryEntity } from 'src/app/core/api/generated/schema';

export const EventAdminCategoryActions = createActionGroup({
  source: 'Event Admin Category',
  events: {
    'set category data': (categories: PageableList_EventCategoryEntity) => ({ categories }),

    'update params': (params: FilterSortPaginateInput) => ({ params }),

    'delete category': (category?: Maybe<EventCategoryEntity>) => ({ category }),
    'category deleted': emptyProps()
  }
});
