import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Store } from '@ngrx/store';
import { AdminActions } from 'src/app/admin/state/admin.actions';
import { AdminFeatureRoute } from 'src/app/admin/typings/menu';
import { contestsFeatureKey } from 'src/app/core/constants/feature.constants';
import { slug } from 'src/app/core/constants/queryparam.constants';
import { requireAnyPrivilege } from 'src/app/core/utils/privilege.utils';
import { ContestAdminDetailsLayoutComponent } from './details/modules/layout/components/contest-admin-details-layout.component';

const menuRoutes: AdminFeatureRoute[] = [
  // {
  //   path: `${contestsFeatureKey}/dashboard`,
  //   loadChildren: () => import('src/app/features/contest/portal/details/portal-contest-details.module')
  //     .then((imported) => imported.PortalContestDetailsModule),
  //   data: { label: 'dashboard' },
  // },
  {
    path: `${contestsFeatureKey}`,
    loadChildren: () =>
      import(
        'src/app/features/contest/admin/overview/contest-admin-overview.module'
      ).then((imported) => imported.ContestAdminOverviewModule),
    data: {
      label: 'overview',
      privileges: ['contests_admin', 'contests_manage'],
    },
    canActivate: [requireAnyPrivilege('contests_admin', 'contests_manage')],
  },
];

const routes: Routes = [
  {
    path: `${contestsFeatureKey}/form`,
    loadChildren: () =>
      import(
        'src/app/features/contest/admin/form/contest-admin-form.module'
      ).then((imported) => imported.ContestAdminFormModule),
    canActivate: [requireAnyPrivilege('contests_admin', 'contests_manage')],
  },
  {
    path: `${contestsFeatureKey}/:${slug}/form`,
    loadChildren: () =>
      import(
        'src/app/features/contest/admin/form/contest-admin-form.module'
      ).then((imported) => imported.ContestAdminFormModule),
    canActivate: [requireAnyPrivilege('contests_admin', 'contests_manage')],
  },
  {
    path: `${contestsFeatureKey}/:${slug}`,
    loadChildren: () =>
      import(
        'src/app/features/contest/admin/details/contest-admin-details.module'
      ).then((imported) => imported.ContestAdminDetailsModule),
    component: ContestAdminDetailsLayoutComponent,
    canActivate: [requireAnyPrivilege('contests_admin', 'contests_manage')],
  },
];

@NgModule({
  imports: [RouterModule.forChild([...menuRoutes, ...routes])],
  exports: [RouterModule],
})
export class ContestAdminRoutingModule {
  constructor(public store: Store) {
    this.store.dispatch(
      AdminActions.addMainRoutes({
        code: contestsFeatureKey,
        routes: menuRoutes,
      })
    );
  }
}
