import { createActionGroup, emptyProps } from '@ngrx/store';
import { FilterSortPaginateInput, Maybe, PageableList_UserContextEntity, UserContextEntity } from 'src/app/core/api/generated/schema';

export const AuthorAdminOverviewActions = createActionGroup({
  source: 'author Admin Overview',
  events: {

    'set overview data': (authors: PageableList_UserContextEntity) => ({ authors }),

    'update params': (params: FilterSortPaginateInput) => ({ params }),

    'delete author': (author?: Maybe<UserContextEntity>) => ({ author }),
    'author deleted': emptyProps(),

    'sponsor author': (author?: Maybe<UserContextEntity>) => ({ author }),
    'author sponsored': emptyProps(),
  }
});
