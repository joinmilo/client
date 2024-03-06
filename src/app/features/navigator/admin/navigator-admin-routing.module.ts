import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Store } from '@ngrx/store';
import { AdminActions } from 'src/app/admin/state/admin.actions';
import { AdminFeatureRoute } from 'src/app/admin/typings/menu';
import { navigatorFeatureKey } from 'src/app/core/constants/feature.constants';
import { requireAnyPrivilege } from 'src/app/core/utils/privilege.utils';

const menuRoutes: AdminFeatureRoute[] = [
  {
    path: navigatorFeatureKey,
    loadChildren: () => import('src/app/features/navigator/admin/form/navigator-admin-form.module')
      .then((imported) => imported.NavigatorAdminFormModule),
    data: {
      label: 'create/edit',
      privileges: ['navigator_admin'],
    },
    canActivate: [requireAnyPrivilege('navigator_admin')] 
  },
];

const routes: Routes = [
]

@NgModule({
  imports: [RouterModule.forChild([
    ...menuRoutes,
    ...routes,
  ])],
  exports: [RouterModule]
})
export class NavigatorAdminRoutingModule {

  constructor(
    public store: Store
  ) {
    this.store.dispatch(AdminActions.addMainRoutes({
      code: navigatorFeatureKey,
      routes: menuRoutes,
    }));
  }
}
