import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Store } from '@ngrx/store';
import { AdminActions } from 'src/app/admin/state/admin.actions';
import { contestsFeatureKey } from 'src/app/core/constants/core.constants';

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
    this.store.dispatch(AdminActions.addRoutes({
      code: contestsFeatureKey,
      routes: menuRoutes,
    }));
  }
}
