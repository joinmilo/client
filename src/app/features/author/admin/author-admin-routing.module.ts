import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Store } from '@ngrx/store';
import { AdminActions } from 'src/app/admin/state/admin.actions';
import { authorsFeatureKey } from 'src/app/core/constants/core.constants';

const menuRoutes: Routes = [
  {
    path: `${authorsFeatureKey}`,
    loadChildren: () => import('src/app/features/author/admin/overview/author-admin-overview.module')
      .then((imported) => imported.AuthorAdminOverviewModule),
    data: { label: 'overview' },
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
export class AuthorAdminRoutingModule {

  constructor(
    public store: Store
  ) {
    this.store.dispatch(AdminActions.addRoutes({
      code: authorsFeatureKey,
      routes: menuRoutes,
    }));
  }
}
