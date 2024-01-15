import { createAction, createActionGroup, emptyProps } from '@ngrx/store';
import { FilterSortPaginateInput, Maybe, PageableList_PrivilegeApplicationEntity, PrivilegeApplicationEntity, RoleEntity, UserEntity } from 'src/app/core/api/generated/schema';

export const openDialog = createAction('[Dialog] Open Dialog');

export const AdminSettingsPrivilegeApplicationActions = createActionGroup({
  source: 'Admin Setting Privilege Applications',
  events: {
    'set overview data': (users: PageableList_PrivilegeApplicationEntity) => ({ users }),

    'update params': (params: FilterSortPaginateInput) => ({ params }),

    'delete user application': (user?: Maybe<PrivilegeApplicationEntity>) => ({ user }),
    'user application deleted': emptyProps(),

    'save': (role: RoleEntity, user: UserEntity, privilegeApplication: PrivilegeApplicationEntity) => ({ role, user, privilegeApplication}),
    'saved': emptyProps(),

    'get user role': (rolePrivilegeId: Maybe<string>) => ({ rolePrivilegeId }),
    'roles retrieved': (roles: RoleEntity[]) => ({ roles }),
  }
});
