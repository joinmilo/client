import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Store } from '@ngrx/store';
import { AdminActions } from 'src/app/admin/state/admin.actions';
import { AdminFeatureRoute } from 'src/app/admin/typings/menu';
import { eventsFeatureKey } from 'src/app/core/constants/feature.constants';
import { id, slug } from 'src/app/core/constants/queryparam.constants';
import { requireAnyPrivilege } from 'src/app/core/utils/privilege.utils';
import { EventAdminDetailsLayoutComponent } from './details/modules/layout/components/event-admin-details-layout.component';

const menuRoutes: AdminFeatureRoute[] = [
  // {
  //   path: `${eventsFeatureKey}/dashboard`,
  //   loadChildren: () => import('src/app/features/event/portal/details/portal-event-details.module')
  //     .then((imported) => imported.PortalEventDetailsModule),
  //   data: { label: 'dashboard' },
  // },
  {
    path: `${eventsFeatureKey}`,
    loadChildren: () => import('src/app/features/event/admin/overview/event-admin-overview.module')
      .then((imported) => imported.EventAdminOverviewModule),
    data: { 
      label: 'overview',
      privileges: ['events_admin', 'events_manage'],
    },
    canActivate: [requireAnyPrivilege('events_admin', 'events_manage')]
  },
  {
    path: `${eventsFeatureKey}/category`,
    loadChildren: () => import('./category-overview/event-admin-category.module')
      .then((imported) => imported.EventAdminCategoryModule),
    data: { 
      label: 'categories',
      privileges: ['events_admin', 'events_manage'],
    },
    canActivate: [requireAnyPrivilege('events_admin', 'events_manage')]
  },
  {
    path: `${eventsFeatureKey}/target-group`,
    loadChildren: () => import('src/app/features/event/admin/target-group/event-admin-target-group.module')
      .then((imported) => imported.EventAdminTargetGroupModule),
    data: { 
      label: 'targetGroups',
      privileges: ['events_admin', 'events_manage'],
    },
    canActivate: [requireAnyPrivilege('events_admin', 'events_manage')]
  },
];

const routes: Routes = [
  {
    path: `${eventsFeatureKey}/form`,
    loadChildren: () => import('src/app/features/event/admin/form/event-admin-form.module')
      .then((imported) => imported.EventAdminFormModule),
    canActivate: [requireAnyPrivilege('events_admin', 'events_manage')]
  },
  {
    path: `${eventsFeatureKey}/category/form`,
    loadChildren: () => import('src/app/features/event/admin/category-form/event-admin-category-form.module')
      .then((imported) => imported.EventAdminCategoryFormModule),
    canActivate: [requireAnyPrivilege('events_admin')]
  },
  {
    path: `${eventsFeatureKey}/category/:${id}/form`,
    loadChildren: () => import('src/app/features/event/admin/category-form/event-admin-category-form.module')
      .then((imported) => imported.EventAdminCategoryFormModule),
    canActivate: [requireAnyPrivilege('events_admin')]
  },
  {
    path: `${eventsFeatureKey}/target-group/form`,
    loadChildren: () => import('src/app/features/event/admin/target-group-form/event-admin-target-group-form.module')
      .then((imported) => imported.EventAdminTargetGroupFormModule),
    canActivate: [requireAnyPrivilege('events_admin')]
  },
  {
    path: `${eventsFeatureKey}/target-group/:${id}/form`,
    loadChildren: () => import('src/app/features/event/admin/target-group-form/event-admin-target-group-form.module')
      .then((imported) => imported.EventAdminTargetGroupFormModule),
    canActivate: [requireAnyPrivilege('events_admin')]
  },
  {
    path: `${eventsFeatureKey}/:${slug}`,
    loadChildren: () => import('src/app/features/event/admin/details/event-admin-details.module')
      .then((imported) => imported.EventAdminDetailsModule),
    component: EventAdminDetailsLayoutComponent,
    canActivate: [requireAnyPrivilege('events_admin', 'events_manage')]
  },
  {
    path: `${eventsFeatureKey}/:${slug}/form`,
    loadChildren: () => import('src/app/features/event/admin/form/event-admin-form.module')
      .then((imported) => imported.EventAdminFormModule),
    canActivate: [requireAnyPrivilege('events_admin', 'events_manage')]
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
    this.store.dispatch(AdminActions.addMainRoutes({
      code: eventsFeatureKey,
      routes: menuRoutes,
    }));
  }
}
