import { createActionGroup, emptyProps } from '@ngrx/store';
import { FilterSortPaginateInput, Maybe, PageableList_RoleEntity, RoleEntity } from 'src/app/core/api/generated/schema';

export const AdminSettingsRoleActions = createActionGroup({
  source: 'Role Admin Overview',
  events: {

    'set overview data': (roles: PageableList_RoleEntity) => ({ roles }),

    'update params': (params: FilterSortPaginateInput) => ({ params }),

    'delete role': (role?: Maybe<RoleEntity>) => ({ role }),
    'role deleted': emptyProps(),
  }
});
