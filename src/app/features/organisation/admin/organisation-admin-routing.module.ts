import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Store } from '@ngrx/store';
import { AdminActions } from 'src/app/admin/state/admin.actions';
import { organisationsFeatureKey } from 'src/app/core/constants/feature.constants';

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
  {
    path: `${organisationsFeatureKey}/form`,
    loadChildren: () => import('src/app/features/organisation/admin/form/organisation-admin-form.module')
      .then((imported) => imported.OrganisationAdminFormModule),
    data: { label: 'form' },
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
    this.store.dispatch(AdminActions.addMainRoutes({
      code: organisationsFeatureKey,
      routes: menuRoutes,
    }));
  }
}
