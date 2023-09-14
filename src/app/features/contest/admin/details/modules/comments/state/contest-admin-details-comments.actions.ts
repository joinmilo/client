import { createActionGroup, emptyProps } from '@ngrx/store';

import { ContestCommentEntity, FilterSortPaginateInput, Maybe, PageableList_ContestCommentEntity } from 'src/app/core/api/generated/schema';
import { Period } from 'src/app/core/typings/period';


export const ContestAdminDetailsCommentsActions = createActionGroup({
  source: 'Contest Admin Details Comments',
  events: {
    'set comments': (comments: PageableList_ContestCommentEntity) => ({ comments }),
    'update params': (slug: Maybe<string> , period?: Period, params?: FilterSortPaginateInput) => ({ slug, period, params }),

    'delete comment': (comment?: Maybe<ContestCommentEntity>) => ({ comment }),
    'comment deleted': emptyProps(),
  }
});
