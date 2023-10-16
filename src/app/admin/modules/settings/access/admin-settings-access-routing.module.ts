import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { AdminActions } from 'src/app/admin/state/admin.actions';
import { AdminSettingsRoute } from 'src/app/admin/typings/menu';
import { requireAnyPrivilege } from 'src/app/core/utils/privilege.utils';

const baseRoute = 'access';

const routes: AdminSettingsRoute[] = [
  {
    path: `${baseRoute}/user`,
    loadChildren: () => import('src/app/admin/modules/settings/access/user/admin-settings-user.module')
      .then((imported) => imported.AdminSettingsUserModule),
    data: {
      name: 'users',
      description: 'usersDescription',
      icon: 'users',
      privileges: ['user_admin']
    },
    canActivate: [requireAnyPrivilege('user_admin')]
  },
  {
    path: `${baseRoute}/role`,
    loadChildren: () => import('src/app/admin/modules/settings/access/role/admin-settings-role.module')
      .then((imported) => imported.AdminSettingsRoleModule),
    data: {
      name: 'roles',
      description: 'rolesDescription',
      icon: 'user-gear',
      privileges: ['user_admin']
    },
    canActivate: [requireAnyPrivilege('user_admin')]
  },
];

@NgModule({
  imports: [RouterModule.forChild([
    ...routes,
  ])],
  exports: [RouterModule]
})
export class AdminSettingsAccessRoutingModule {

  constructor(
    public store: Store
  ) {
    this.store.dispatch(AdminActions.addSettingsMenu({
      name: 'access',
      privileges: ['user_admin'],
      childs: routes.map(route => ({
        name: route.data?.name,
        description: route.data?.description,
        icon: route.data?.icon,
        route: route.path,
        privileges: route.data.privileges,
      }))
    }));
  }
}
