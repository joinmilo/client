import { createActionGroup, emptyProps } from '@ngrx/store';

import { Period } from 'ngx-cinlib/core';
import { EventCommentEntity, FilterSortPaginateInput, Maybe, PageableList_EventCommentEntity } from 'src/app/core/api/generated/schema';


export const EventAdminDetailsCommentsActions = createActionGroup({
  source: 'Event Admin Details Comments',
  events: {
    'set comments': (comments: PageableList_EventCommentEntity) => ({ comments }),
    'update params': (slug: Maybe<string> , period?: Period, params?: FilterSortPaginateInput) => ({ slug, period, params }),

    'delete comment': (comment?: Maybe<EventCommentEntity>) => ({ comment }),
    'comment deleted': emptyProps(),
  }
});
