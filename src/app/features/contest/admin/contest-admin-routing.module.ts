import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Store } from '@ngrx/store';
import { AdminActions } from 'src/app/admin/state/admin.actions';
import { contestsFeatureKey } from 'src/app/core/constants/feature.constants';
import { id, slug } from 'src/app/core/constants/queryparam.constants';
import { ContestAdminDetailsLayoutComponent } from './details/modules/layout/components/contest-admin-details-layout.component';

const menuRoutes: Routes = [
  // {
  //   path: `${contestsFeatureKey}/dashboard`,
  //   loadChildren: () => import('src/app/features/contest/portal/details/portal-contest-details.module')
  //     .then((imported) => imported.PortalContestDetailsModule),
  //   data: { label: 'dashboard' },
  // },
  {
    path: `${contestsFeatureKey}`,
    loadChildren: () => import('src/app/features/contest/admin/overview/contest-admin-overview.module')
      .then((imported) => imported.ContestAdminOverviewModule),
    data: { label: 'overview' },
  },
  {
    path: `${contestsFeatureKey}/types`,
    loadChildren: () => import('src/app/features/contest/admin/types/contest-admin-types.module')
      .then((imported) => imported.ContestAdminTypesModule),
    data: { label: 'types' },
  },
];

const routes: Routes = [
  {
  path: `${contestsFeatureKey}/types/form`,
    loadChildren: () => import('src/app/features/contest/admin/type-form/contest-admin-type-form.module')
      .then((imported) => imported.ContestAdminTypeFormModule),
  },
  {
  path: `${contestsFeatureKey}/types/:${id}/form`,
    loadChildren: () => import('src/app/features/contest/admin/type-form/contest-admin-type-form.module')
      .then((imported) => imported.ContestAdminTypeFormModule),
  },
  {
    path: `${contestsFeatureKey}/:${slug}`,
    loadChildren: () => import('src/app/features/contest/admin/details/contest-admin-details.module')
      .then((imported) => imported.ContestAdminDetailsModule),
    component: ContestAdminDetailsLayoutComponent
  },
  {
    path: `${contestsFeatureKey}/form`,
    loadChildren: () => import('src/app/features/contest/admin/form/contest-admin-form.module')
      .then((imported) => imported.ContestAdminFormModule),
  },
]


@NgModule({
  imports: [RouterModule.forChild([
    ...menuRoutes,
    ...routes,
  ])],
  exports: [RouterModule]
})
export class ContestAdminRoutingModule {

  constructor(
    public store: Store
  ) {
    this.store.dispatch(AdminActions.addMainRoutes({
      code: contestsFeatureKey,
      routes: menuRoutes,
    }));
  }
}
