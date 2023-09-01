import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { visitorsRoute } from './constants/event-admin-details.constants';
import { EventAdminDetailsLandingComponent } from './modules/landing/components/event-admin-details-landing.component';
import { EventAdminDetailsVisitorsComponent } from './modules/visitors/components/event-admin-details-visitors.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/landing/event-admin-details-landing.module')
      .then((imported) => imported.EventAdminDetailsLandingModule),
    component: EventAdminDetailsLandingComponent
  },
  {
    path: visitorsRoute,
    loadChildren: () => import('./modules/visitors/event-admin-details-visitors.module')
      .then((imported) => imported.EventAdminDetailsVisitorsModule),
    component: EventAdminDetailsVisitorsComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventAdminDetailsRoutingModule { }

