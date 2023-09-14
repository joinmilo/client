import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Store } from '@ngrx/store';
import { AdminActions } from 'src/app/admin/state/admin.actions';
import { contestsFeatureKey } from 'src/app/core/constants/feature.constants';
import { slug } from 'src/app/core/constants/queryparam.constants';
import { ContestAdminDetailsLayoutComponent } from './details/modules/layout/components/contest-admin-details-layout.component';

const menuRoutes: Routes = [
  {
    path: `${contestsFeatureKey}`,
    loadChildren: () => import('src/app/features/contest/admin/overview/contest-admin-overview.module')
      .then((imported) => imported.ContestAdminOverviewModule),
    data: { label: 'overview' },
  },
  {
    path: `${contestsFeatureKey}/dashboard`,
    loadChildren: () => import('src/app/features/contest/portal/details/portal-contest-details.module')
      .then((imported) => imported.PortalContestDetailsModule),
    data: { label: 'dashboard' },
  },
];

const routes: Routes = [
  {
    path: `${contestsFeatureKey}/:${slug}`,
    loadChildren: () => import('src/app/features/contest/admin/details/contest-admin-details.module')
      .then((imported) => imported.ContestAdminDetailsModule),
    component: ContestAdminDetailsLayoutComponent
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
