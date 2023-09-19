import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Store } from '@ngrx/store';
import { AdminActions } from 'src/app/admin/state/admin.actions';
import { reportsFeatureKey } from 'src/app/core/constants/feature.constants';

const menuRoutes: Routes = [
  {
    path: `${reportsFeatureKey}`,
    loadChildren: () => import('src/app/features/report/admin/overview/report-admin-overview.module')
      .then((imported) => imported.ReportAdminOverviewModule),
    data: { label: 'overview' },
  },
  {
    path: `${reportsFeatureKey}/types`,
    loadChildren: () => import('src/app/features/report/admin/types/report-admin-types.module')
      .then((imported) => imported.ReportAdminTypesModule),
    data: { label: 'types' },
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
export class ReportAdminRoutingModule {

  constructor(
    public store: Store
  ) {
    this.store.dispatch(AdminActions.addMainRoutes({
      code: reportsFeatureKey,
      routes: menuRoutes,
    }));
  }
}
