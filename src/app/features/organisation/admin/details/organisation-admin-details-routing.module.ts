import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { applicationsRoute, commentsRoute, eventsRoute, favoritesRoute, membersRoute, ratingsRoute, searchRoute, visitorsRoute } from './constants/organisation-admin-details.constants';
import { OrganisationAdminDetailsApplicationsComponent } from './modules/applications/components/organisation-admin-details-applications.component';
import { OrganisationAdminDetailsCommentsComponent } from './modules/comments/components/organisation-admin-details-comments.component';
import { OrganisationAdminDetailsEventsComponent } from './modules/events/components/organisation-admin-details-events.component';
import { OrganisationAdminDetailsFavoritesComponent } from './modules/favorites/components/organisation-admin-details-favorites.component';
import { OrganisationAdminDetailsLandingComponent } from './modules/landing/components/organisation-admin-details-landing.component';
import { OrganisationAdminDetailsMembersComponent } from './modules/members/components/organisation-admin-details-members.component';
import { OrganisationAdminDetailsRatingComponent } from './modules/rating/component/organisation-admin-details-rating.component';
import { OrganisationAdminDetailsSearchComponent } from './modules/search/component/organisation-admin-details-search.component';
import { OrganisationAdminDetailsVisitorsComponent } from './modules/visitors/component/organisation-admin-details-visitors.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/landing/organisation-admin-details-landing.module')
      .then((imported) => imported.OrganisationAdminDetailsLandingModule),
    component: OrganisationAdminDetailsLandingComponent
  },
  {
    path: membersRoute,
    loadChildren: () => import('./modules/members/organisation-admin-details-members.module')
      .then((imported) => imported.OrganisationAdminDetailsMembersModule),
    component: OrganisationAdminDetailsMembersComponent
  },
  {
    path: applicationsRoute,
    loadChildren: () => import('./modules/applications/organisation-admin-details-applications.module')
      .then((imported) => imported.OrganisationAdminDetailsApplicationsModule),
    component: OrganisationAdminDetailsApplicationsComponent
  },    
  {
    path: eventsRoute,
    loadChildren: () => import('./modules/events/organisation-admin-details-events.module')
      .then((imported) => imported.OrganisationAdminDetailsEventsModule),
    component: OrganisationAdminDetailsEventsComponent
  },
  {
    path: commentsRoute,
    loadChildren: () => import('./modules/comments/organisation-admin-details-comments.module')
      .then((imported) => imported.OrganisationAdminDetailsCommentsModule),
    component: OrganisationAdminDetailsCommentsComponent
  },
    {
    path: searchRoute,
    loadChildren: () => import('./modules/search/organisation-admin-details-search.module')
      .then((imported) => imported.OrganisationAdminDetailsSearchModule),
      component: OrganisationAdminDetailsSearchComponent
    },
  {
    path: visitorsRoute,
    loadChildren: () => import('./modules/visitors/organisation-admin-details-visitors.module')
      .then((imported) => imported.OrganisationAdminDetailsVisitorsModule),
    component: OrganisationAdminDetailsVisitorsComponent
  },
  {
    path: ratingsRoute,
    loadChildren: () => import('./modules/rating/organisation-admin-details-rating.module')
      .then((imported) => imported.OrganisationAdminDetailsRatingModule),
    component: OrganisationAdminDetailsRatingComponent
  },
  {
    path: favoritesRoute,
    loadChildren: () => import('./modules/favorites/organisation-admin-details-favorites.module')
      .then((imported) => imported.OrganisationAdminDetailsFavoritesModule),
    component: OrganisationAdminDetailsFavoritesComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrganisationAdminDetailsRoutingModule { }

