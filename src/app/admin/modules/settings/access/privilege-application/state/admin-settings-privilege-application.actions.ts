import { createAction, createActionGroup, emptyProps } from '@ngrx/store';
import { FilterSortPaginateInput, Maybe, PageableList_PrivilegeApplicationEntity, PrivilegeApplicationEntity, RoleEntity, UserEntity } from 'src/app/core/api/generated/schema';

export const openDialog = createAction('[Dialog] Open Dialog');

export const AdminSettingsPrivilegeApplicationActions = createActionGroup({
  source: 'Admin Setting Privilege Applications',
  events: {
    'set overview data': (users: PageableList_PrivilegeApplicationEntity) => ({ users }),

    'update params': (params: FilterSortPaginateInput) => ({ params }),

    'delete application': (application?: Maybe<PrivilegeApplicationEntity>) => ({ application }),
    'application deleted': emptyProps(),

    'assign role': (role: RoleEntity, user: UserEntity) => ({ role, user}),
    'role assigned': emptyProps(),

    'get roles': (rolePrivilegeId: Maybe<string>) => ({ rolePrivilegeId }),
    'roles retrieved': (roles: RoleEntity[]) => ({ roles }),
    
    'role assigned delete application': (application?: Maybe<PrivilegeApplicationEntity>) => ({ application }),
    'role assigned application deleted': emptyProps(),
  }
});
