import { createActionGroup, emptyProps } from '@ngrx/store';

import { EventCommentEntity, FilterSortPaginateInput, Maybe, PageableList_EventCommentEntity } from 'src/app/core/api/generated/schema';
import { Period } from 'src/app/core/typings/period';


export const EventAdminDetailsCommentsActions = createActionGroup({
  source: 'Event Admin Details Comments',
  events: {
    'set comments': (comments: PageableList_EventCommentEntity) => ({ comments }),
    'update params': (slug: Maybe<string> , period?: Period, params?: FilterSortPaginateInput) => ({ slug, period, params }),

    'delete comment': (comment?: Maybe<EventCommentEntity>) => ({ comment }),
    'comment deleted': emptyProps(),
  }
});
