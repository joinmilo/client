import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from 'src/app/core/guards/auth-guard.service';
import { commentsRoute, participationFormRoute, participationsRoute, winnersRoute } from './constants/contest-details.constant';
import { ContestPortalDetailsCommentsComponent } from './modules/comments/components/contest-portal-details-comments.component';
import { ContestPortalDetailsParticipationFormComponent } from './modules/participation-form/components/portal-contest-details-participation-form.component';
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
    path: participationFormRoute,
    loadChildren: () => import('./modules/participation-form/contest-portal-details-participation-form.module')
      .then((imported) => imported.ContestPortalDetailsParticipationFormModule),
        component: ContestPortalDetailsParticipationFormComponent,
    canActivate: [AuthGuardService],
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
    //TODO: Guard 
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContestPortalDetailsRoutingModule { }
