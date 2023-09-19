import { createActionGroup, emptyProps } from '@ngrx/store';
import { EventTargetGroupEntity, FilterSortPaginateInput, Maybe, PageableList_EventTargetGroupEntity } from 'src/app/core/api/generated/schema';

export const EventAdminTargetGroupActions = createActionGroup({
  source: 'Event Admin TargetGroup',
  events: {
    'set targetGroup data': (categories: PageableList_EventTargetGroupEntity) => ({ categories }),

    'update params': (params: FilterSortPaginateInput) => ({ params }),

    'delete targetGroup': (targetGroup?: Maybe<EventTargetGroupEntity>) => ({ targetGroup }),
    'targetGroup deleted': emptyProps()
  }
});
