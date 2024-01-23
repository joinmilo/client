import { createAction, createActionGroup, emptyProps } from '@ngrx/store';
import { FilterSortPaginateInput, Maybe, PageableList_PrivilegeApplicationEntity, PrivilegeApplicationEntity, RoleEntity } from 'src/app/core/api/generated/schema';

export const openDialog = createAction('[Dialog] Open Dialog');

export const AdminSettingsPrivilegeApplicationActions = createActionGroup({
  source: 'Admin Setting Privilege Applications',
  events: {
    'set overview data': (users: PageableList_PrivilegeApplicationEntity) => ({ users }),

    'update params': (params: FilterSortPaginateInput) => ({ params }),

    'delete application': (application?: Maybe<PrivilegeApplicationEntity>) => ({ application }),
    'application deleted': emptyProps(),

    'assign role': (roleId: Maybe<string>, userId: Maybe<string>, applicationId?: Maybe<string>) => ({ roleId, userId, applicationId }),
    'role assigned': emptyProps(),

    'get roles': (rolePrivilegeId: Maybe<string>) => ({ rolePrivilegeId }),
    'roles retrieved': (roles: RoleEntity[]) => ({ roles }),
  }
});
