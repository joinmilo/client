import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { applicationsRoute, commentsRoute, favoritesRoute, membersRoute, searchRoute, visitorsRoute } from './constants/organisation-admin-details.constants';
import { OrganisationAdminDetailsApplicationsComponent } from './modules/applications/components/organisation-admin-details-applications.component';
import { OrganisationAdminDetailsCommentsComponent } from './modules/comments/components/organisation-admin-details-comments.component';
import { OrganisationAdminDetailsFavoritesComponent } from './modules/favorites/components/organisation-admin-details-favorites.component';
import { OrganisationAdminDetailsLandingComponent } from './modules/landing/components/organisation-admin-details-landing.component';
import { OrganisationAdminDetailsMembersComponent } from './modules/members/components/organisation-admin-details-members.component';
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
    path: searchRoute,
    loadChildren: () => import('./modules/search/organisation-admin-details-search.module')
      .then((imported) => imported.OrganisationAdminDetailsSearchModule),
      component: OrganisationAdminDetailsSearchComponent
  },
  {
    path: commentsRoute,
    loadChildren: () => import('./modules/comments/organisation-admin-details-comments.module')
      .then((imported) => imported.OrganisationAdminDetailsCommentsModule),
    component: OrganisationAdminDetailsCommentsComponent
  },
  {
    path: visitorsRoute,
    loadChildren: () => import('./modules/visitors/organisation-admin-details-visitors.module')
      .then((imported) => imported.OrganisationAdminDetailsVisitorsModule),
    component: OrganisationAdminDetailsVisitorsComponent
  },
  {
    path: favoritesRoute,
    loadChildren: () => import('./modules/favorites/organisation-admin-details-favorites.module')
      .then((imported) => imported.OrganisationAdminDetailsFavoritesModule),
    component: OrganisationAdminDetailsFavoritesComponent
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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrganisationAdminDetailsRoutingModule { }

