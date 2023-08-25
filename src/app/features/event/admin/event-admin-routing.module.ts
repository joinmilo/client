import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Store } from '@ngrx/store';
import { AdminActions } from 'src/app/admin/state/admin.actions';
import { eventsFeatureKey, slug } from 'src/app/core/constants/core.constants';

const menuRoutes: Routes = [
  {
    path: `${eventsFeatureKey}`,
    loadChildren: () => import('src/app/features/event/admin/overview/event-admin-overview.module')
      .then((imported) => imported.EventAdminOverviewModule),
    data: { label: 'overview' },
  },
  {
    path: `${eventsFeatureKey}/dashboard`,
    loadChildren: () => import('src/app/features/event/portal/details/portal-event-details.module')
      .then((imported) => imported.PortalEventDetailsModule),
    data: { label: 'dashboard' },
  },
];

const routes: Routes = [
  {
    path: `${eventsFeatureKey}/:${slug}`,
    loadChildren: () => import('src/app/features/event/admin/details/event-admin-details.module')
      .then((imported) => imported.EventAdminDetailsModule),
  },
]

@NgModule({
  imports: [RouterModule.forChild([
    ...menuRoutes,
    ...routes,
  ])],
  exports: [RouterModule]
})
export class EventAdminRoutingModule {

  constructor(
    public store: Store
  ) {
    this.store.dispatch(AdminActions.addRoutes({
      code: eventsFeatureKey,
      routes: menuRoutes,
    }));
  }
}
