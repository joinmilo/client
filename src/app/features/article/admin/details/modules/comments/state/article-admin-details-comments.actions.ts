import { createActionGroup, emptyProps } from '@ngrx/store';

import { Period } from 'ngx-cinlib/core';
import { ArticleCommentEntity, FilterSortPaginateInput, Maybe, PageableList_ArticleCommentEntity } from 'src/app/core/api/generated/schema';


export const ArticleAdminDetailsCommentsActions = createActionGroup({
  source: 'Article Admin Details Comments',
  events: {
    'set comments': (comments: PageableList_ArticleCommentEntity) => ({ comments }),
    'update params': (slug: Maybe<string> , period?: Period, params?: FilterSortPaginateInput) => ({ slug, period, params }),

    'delete comment': (comment?: Maybe<ArticleCommentEntity>) => ({ comment }),
    'comment deleted': emptyProps(),
  }
});
