import { createActionGroup, emptyProps } from '@ngrx/store';

import { ArticleCommentEntity, FilterSortPaginateInput, Maybe, PageableList_ArticleCommentEntity } from 'src/app/core/api/generated/schema';
import { Period } from 'src/app/core/typings/period';


export const ArticleAdminDetailsCommentsActions = createActionGroup({
  source: 'Article Admin Details Comments',
  events: {
    'set comments': (comments: PageableList_ArticleCommentEntity) => ({ comments }),
    'update params': (slug: Maybe<string> , period?: Period, params?: FilterSortPaginateInput) => ({ slug, period, params }),

    'delete comment': (comment?: Maybe<ArticleCommentEntity>) => ({ comment }),
    'comment deleted': emptyProps(),
  }
});
