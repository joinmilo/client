import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Store } from '@ngrx/store';
import { AdminActions } from 'src/app/admin/state/admin.actions';
import { dealsFeatureKey } from 'src/app/core/constants/feature.constants';
import { slug } from 'src/app/core/constants/queryparam.constants';
import { DealAdminDetailsLayoutComponent } from './details/modules/layout/components/deal-admin-details-layout.component';

const menuRoutes: Routes = [
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
    data: { label: 'overview' },
  },
  {
    path: `${dealsFeatureKey}/category`,
    loadChildren: () => import('src/app/features/deal/admin/category/deal-admin-category.module')
      .then((imported) => imported.DealAdminCategoryModule),
    data: { label: 'category' },
  },
];

const routes: Routes = [
  {
    path: `${dealsFeatureKey}/:${slug}`,
    loadChildren: () => import('src/app/features/deal/admin/details/deal-admin-details.module')
      .then((imported) => imported.DealAdminDetailsModule),
    component: DealAdminDetailsLayoutComponent
  },
  {
    path: `${dealsFeatureKey}/form`,
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
export class DealAdminRoutingModule {

  constructor(
    public store: Store
  ) {
    this.store.dispatch(AdminActions.addMainRoutes({
      code: dealsFeatureKey,
      routes: menuRoutes,
    }));
  }
}
