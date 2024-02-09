import { createActionGroup, emptyProps } from '@ngrx/store';

import { Period } from 'ngx-cinlib/core';
import { FilterSortPaginateInput, Maybe, OrganisationCommentEntity, PageableList_OrganisationCommentEntity } from 'src/app/core/api/generated/schema';


export const OrganisationAdminDetailsCommentsActions = createActionGroup({
  source: 'Organisation Admin Details Comments',
  events: {
    'set comments': (comments: PageableList_OrganisationCommentEntity) => ({ comments }),
    'update params': (slug: Maybe<string> , period?: Period, params?: FilterSortPaginateInput) => ({ slug, period, params }),

    'delete comment': (comment?: Maybe<OrganisationCommentEntity>) => ({ comment }),
    'comment deleted': emptyProps(),
  }
});
