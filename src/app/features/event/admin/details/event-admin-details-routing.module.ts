import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { attendeeRoute, commentsRoute, favoritesRoute, ratingsRoute, searchRoute, visitorsRoute } from './constants/event-admin-details.constants';
import { EventAdminDetailsAttendeeComponent } from './modules/attendee/components/event-admin-details-attendee.component';
import { EventAdminDetailsCommentsComponent } from './modules/comments/components/event-admin-details-comments.component';
import { EventAdminDetailsFavoritesComponent } from './modules/favorites/components/event-admin-details-favorites.component';
import { EventAdminDetailsLandingComponent } from './modules/landing/components/event-admin-details-landing.component';
import { EventAdminDetailsRatingComponent } from './modules/rating/component/event-admin-details-rating.component';
import { EventAdminDetailsSearchComponent } from './modules/search/component/event-admin-details-search.component';
import { EventAdminDetailsVisitorsComponent } from './modules/visitors/component/event-admin-details-visitors.component';

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
    path: ratingsRoute,
    loadChildren: () => import('./modules/rating/event-admin-details-rating.module')
      .then((imported) => imported.EventAdminDetailsRatingModule),
    component: EventAdminDetailsRatingComponent
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
  {
    path: favoritesRoute,
    loadChildren: () => import('./modules/favorites/event-admin-details-favorites.module')
      .then((imported) => imported.EventAdminDetailsFavoritesModule),
    component: EventAdminDetailsFavoritesComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventAdminDetailsRoutingModule { }

