import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { commentsRoute, participationFormsRoute, participationsRoute, winnersRoute } from './constants/contest-details.constant';
import { ContestPortalDetailsCommentsComponent } from './modules/comments/components/contest-portal-details-comments.component';
import { ContestPortalDetailsParticipationFormComponent } from './modules/participationForm/components/portal-contest-details-participation-form.component';
import { ContestPortalDetailsParticipationsComponent } from './modules/participations/components/contest-portal-details-participations.component';
import { ContestPortalDetailsWinnersComponent } from './modules/winners/components/contest-portal-details-winners.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/landing/contest-portal-details-landing.module')
      .then((imported) => imported.ContestPortalDetailsLandingModule),
  },
    {
    path: participationsRoute,
    loadChildren: () => import('./modules/participations/contest-portal-details-participations.module')
      .then((imported) => imported.ContestPortalDetailsParticipationsModule),
      component: ContestPortalDetailsParticipationsComponent
  },
  {
    path: participationFormsRoute,
    loadChildren: () => import('./modules/participationForm/contest-portal-details-participation-form.module')
      .then((imported) => imported.ContestPortalDetailsParticipationFormModule),
      component: ContestPortalDetailsParticipationFormComponent 
  },
  {
    path: commentsRoute,
    loadChildren: () => import('./modules/comments/contest-portal-details-comments.module')
      .then((imported) => imported.ContestPortalDetailsCommentsModule),
    component: ContestPortalDetailsCommentsComponent
  },
  {
    path: winnersRoute,
    loadChildren: () => import('./modules/winners/contest-portal-details-winners.module')
      .then((imported) => imported.ContestPortalDetailsWinnersModule),
      component: ContestPortalDetailsWinnersComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContestPortalDetailsRoutingModule { }
