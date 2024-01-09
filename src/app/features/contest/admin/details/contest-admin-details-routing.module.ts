import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { commentsRoute, participationsRoute, searchRoute } from './constants/contest-admin-details.constants';
import { ContestAdminDetailsCommentsComponent } from './modules/comments/components/contest-admin-details-comments.component';
import { ContestAdminDetailsLandingComponent } from './modules/landing/components/contest-admin-details-landing.component';
import { ContestAdminDetailsSearchComponent } from './modules/search/component/contest-admin-details-search.component';
import { ContestAdminDetailsParticipationComponent } from './modules/participation/components/contest-admin-details-participation.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/landing/contest-admin-details-landing.module')
      .then((imported) => imported.ContestAdminDetailsLandingModule),
    component: ContestAdminDetailsLandingComponent
  },
    {
    path: searchRoute,
    loadChildren: () => import('./modules/search/contest-admin-details-search.module')
      .then((imported) => imported.ContestAdminDetailsSearchModule),
      component: ContestAdminDetailsSearchComponent
  },
  {
    path: commentsRoute,
    loadChildren: () => import('./modules/comments/contest-admin-details-comments.module')
      .then((imported) => imported.ContestAdminDetailsCommentsModule),
    component: ContestAdminDetailsCommentsComponent
  },
  {
    path: participationsRoute,
    loadChildren: () => import('./modules/participation/contest-admin-details-participation.module')
      .then((imported) => imported.ContestAdminDetailsParticipationModule),
    component: ContestAdminDetailsParticipationComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContestAdminDetailsRoutingModule { }

