import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Store } from '@ngrx/store';
import { AdminActions } from 'src/app/admin/state/admin.actions';
import { mediaFeatureKey } from 'src/app/core/constants/core.constants';

const menuRoutes: Routes = [
  {
    path: `${mediaFeatureKey}`,
    loadChildren: () => import('src/app/features/media/admin/overview/media-admin-overview.module')
      .then((imported) => imported.MediaAdminOverviewModule),
    data: { label: 'overview' },
  },
  {
    path: `${mediaFeatureKey}/dashboard`,
    loadChildren: () => import('src/app/features/media/portal/overview/portal-media-overview.module')
      .then((imported) => imported.PortalMediaOverviewModule),
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
export class MediaAdminRoutingModule {

  constructor(
    public store: Store
  ) {
    this.store.dispatch(AdminActions.addRoutes({
      code: mediaFeatureKey,
      routes: menuRoutes,
    }));
  }
}
