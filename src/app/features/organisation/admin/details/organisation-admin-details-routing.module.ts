import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { commentsRoute, searchRoute, visitorsRoute } from './constants/organisation-admin-details.constants';
import { OrganisationAdminDetailsCommentsComponent } from './modules/comments/components/organisation-admin-details-comments.component';
import { OrganisationAdminDetailsLandingComponent } from './modules/landing/components/organisation-admin-details-landing.component';
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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrganisationAdminDetailsRoutingModule { }

