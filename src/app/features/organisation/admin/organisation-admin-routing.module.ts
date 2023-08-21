import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Store } from '@ngrx/store';
import { AdminActions } from 'src/app/admin/state/admin.actions';
import { organisationsFeatureKey } from 'src/app/core/constants/core.constants';

const menuRoutes: Routes = [
  {
    path: `${organisationsFeatureKey}`,
    loadChildren: () => import('src/app/features/organisation/admin/overview/organisation-admin-overview.module')
      .then((imported) => imported.OrganisationAdminOverviewModule),
    data: { label: 'overview' },
  },
  {
    path: `${organisationsFeatureKey}/dashboard`,
    loadChildren: () => import('src/app/features/organisation/portal/details/portal-organisation-details.module')
      .then((imported) => imported.PortalOrganisationDetailsModule),
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
export class OrganisationAdminRoutingModule {

  constructor(
    public store: Store
  ) {
    this.store.dispatch(AdminActions.addRoutes({
      code: organisationsFeatureKey,
      routes: menuRoutes,
    }));
  }
}
