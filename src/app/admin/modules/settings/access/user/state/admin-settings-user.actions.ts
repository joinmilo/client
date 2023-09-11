import { createActionGroup, emptyProps } from '@ngrx/store';
import { FilterSortPaginateInput, Maybe, PageableList_UserEntity, UserEntity } from 'src/app/core/api/generated/schema';

export const AdminSettingsUserActions = createActionGroup({
  source: 'User Admin Overview',
  events: {

    'set overview data': (users: PageableList_UserEntity) => ({ users }),

    'update params': (params: FilterSortPaginateInput) => ({ params }),

    'delete user': (user?: Maybe<UserEntity>) => ({ user }),
    'user deleted': emptyProps(),
  }
});
