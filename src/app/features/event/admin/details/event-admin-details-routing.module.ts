import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventAdminDetailsLandingComponent } from './landing/components/event-admin-details-landing.component';
import { EventAdminDetailsVisitorsComponent } from './visitors/components/event-admin-details-visitors.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('src/app/features/event/admin/details/landing/event-admin-details-landing.module')
      .then((imported) => imported.EventAdminDetailsLandingModule),
    component: EventAdminDetailsLandingComponent
  },
  {
    path: 'visitors',
    loadChildren: () => import('src/app/features/event/admin/details/visitors/event-admin-details-visitors.module')
      .then((imported) => imported.EventAdminDetailsVisitorsModule),
    component: EventAdminDetailsVisitorsComponent
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventAdminDetailsRoutingModule { }

