import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { commentsRoute, searchRoute } from './constants/organisation-admin-details.constants';
import { OrganisationAdminDetailsCommentsComponent } from './modules/comments/components/organisation-admin-details-comments.component';
import { OrganisationAdminDetailsLandingComponent } from './modules/landing/components/organisation-admin-details-landing.component';
import { OrganisationAdminDetailsSearchComponent } from './modules/search/component/organisation-admin-details-search.component';

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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrganisationAdminDetailsRoutingModule { }

