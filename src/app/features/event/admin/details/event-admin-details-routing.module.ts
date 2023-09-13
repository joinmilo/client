import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { attendeeRoute, commentsRoute, searchRoute, visitorsRoute } from './constants/event-admin-details.constants';
import { EventAdminDetailsAttendeeComponent } from './modules/attendee/components/event-admin-details-attendee.component';
import { EventAdminDetailsCommentsComponent } from './modules/comments/components/event-admin-details-comments.component';
import { EventAdminDetailsLandingComponent } from './modules/landing/components/event-admin-details-landing.component';
import { EventAdminDetailsSearchComponent } from './modules/search/components/event-admin-details-search.component';
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
    path: searchRoute,
    loadChildren: () => import('./modules/search/event-admin-details-search.module')
      .then((imported) => imported.EventAdminDetailsSearchModule),
      component: EventAdminDetailsSearchComponent
  },
  {
    path: commentsRoute,
    loadChildren: () => import('./modules/comments/event-admin-details-comments.module')
      .then((imported) => imported.EventAdminDetailsCommentsModule),
    component: EventAdminDetailsCommentsComponent
  },
  {
    path: attendeeRoute,
    loadChildren: () => import('./modules/attendee/event-admin-details-attendee.module')
      .then((imported) => imported.EventAdminDetailsAttendeeModule),
    component: EventAdminDetailsAttendeeComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventAdminDetailsRoutingModule { }

