import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { googleSearchRoute, visitorsRoute } from './constants/event-admin-details.constants';
import { EventAdminDetailsGoogleSearchComponent } from './modules/google-search/components/event-admin-details-google-search.component';
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
    {
    path: googleSearchRoute,
    loadChildren: () => import('./modules/google-search/event-admin-details-google-search.module')
      .then((imported) => imported.EventAdminDetailsGoogleSearchModule),
      component: EventAdminDetailsGoogleSearchComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventAdminDetailsRoutingModule { }

