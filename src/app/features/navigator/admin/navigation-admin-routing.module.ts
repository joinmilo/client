import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Store } from '@ngrx/store';
import { AdminActions } from 'src/app/admin/state/admin.actions';
import { AdminFeatureRoute } from 'src/app/admin/typings/menu';
import { dealsFeatureKey } from 'src/app/core/constants/feature.constants';
import { slug } from 'src/app/core/constants/queryparam.constants';
import { requireAnyPrivilege } from 'src/app/core/utils/privilege.utils';

const menuRoutes: AdminFeatureRoute[] = [
  // {
  //   path: `${dealsFeatureKey}/dashboard`,
  //   loadChildren: () => import('src/app/features/deal/portal/details/portal-deal-details.module')
  //     .then((imported) => imported.PortalDealDetailsModule),
  //   data: { label: 'dashboard' },
  // },
  {
    path: `${dealsFeatureKey}`,
    loadChildren: () => import('src/app/features/deal/admin/overview/deal-admin-overview.module')
      .then((imported) => imported.DealAdminOverviewModule),
    data: { 
      label: 'overview',
      privileges: ['deals_admin', 'deals_manage']
    },
    canActivate: [requireAnyPrivilege('deals_admin', 'deals_manage')]
  },
];

const routes: Routes = [
  {
    path: `${dealsFeatureKey}/form`,
    loadChildren: () => import('src/app/features/deal/admin/form/deal-admin-form.module')
      .then((imported) => imported.DealAdminFormModule),
    canActivate: [requireAnyPrivilege('deals_admin', 'deals_manage')]
  },
  {
    path: `${dealsFeatureKey}/:${slug}/form`,
    loadChildren: () => import('src/app/features/deal/admin/form/deal-admin-form.module')
      .then((imported) => imported.DealAdminFormModule),
  },
]

@NgModule({
  imports: [RouterModule.forChild([
    ...menuRoutes,
    ...routes,
  ])],
  exports: [RouterModule]
})
export class NavigationAdminRoutingModule {

  constructor(
    public store: Store
  ) {
    this.store.dispatch(AdminActions.addMainRoutes({
      code: dealsFeatureKey,
      routes: menuRoutes,
    }));
  }
}
