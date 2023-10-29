import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Store } from '@ngrx/store';
import { AdminActions } from 'src/app/admin/state/admin.actions';
import { AdminFeatureRoute } from 'src/app/admin/typings/menu';
import { organisationsFeatureKey } from 'src/app/core/constants/feature.constants';
import { slug } from 'src/app/core/constants/queryparam.constants';
import { OrganisationAdminDetailsLayoutComponent } from './details/modules/layout/components/organisation-admin-details-layout.component';

const menuRoutes: AdminFeatureRoute[] = [
  {
    path: `${organisationsFeatureKey}`,
    loadChildren: () => import('src/app/features/organisation/admin/overview/organisation-admin-overview.module')
      .then((imported) => imported.OrganisationAdminOverviewModule),
    data: {
      label: 'overview',
    },
  },
];

const routes: Routes = [
  {
    path: `${organisationsFeatureKey}/form`,
    loadChildren: () => import('src/app/features/organisation/admin/form/organisation-admin-form.module')
      .then((imported) => imported.OrganisationAdminFormModule),
  },
  {
    path: `${organisationsFeatureKey}/:${slug}/form`,
    loadChildren: () => import('src/app/features/organisation/admin/form/organisation-admin-form.module')
      .then((imported) => imported.OrganisationAdminFormModule),
  },
  {
    path: `${organisationsFeatureKey}/:${slug}`,
    loadChildren: () => import('src/app/features/organisation/admin/details/organisation-admin-details.module')
      .then((imported) => imported.OrganisationAdminDetailsModule),
    component: OrganisationAdminDetailsLayoutComponent
  },
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
