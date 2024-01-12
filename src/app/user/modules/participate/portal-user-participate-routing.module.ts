import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortalParticipateComponent } from './components/portal-participate.component';
import { PortalParticipateSuccessBecomeAuthorComponent } from './components/success-become-author/portal-participate-success-become-author.component';
import { PortalParticipateSuccessContestComponent } from './components/success-contest/portal-participate-success-contest.component';
import { PortalParticipateSuccessCreateOrganisationComponent } from './components/success-create-organisation/portal-participate-success-create-organisation.component';
import { PortalParticipateSuccessJoinOrganisationComponent } from './components/success-join-organisation/portal-participate-success-join-organisation.component';

const routes: Routes = [
  {
    path: '',
    component: PortalParticipateComponent,
  },
  {
    path: 'success-become-author',
    component: PortalParticipateSuccessBecomeAuthorComponent,
  },
  {
    path: 'success-create-organisation',
    component: PortalParticipateSuccessCreateOrganisationComponent,
  },
  {
    path: 'success-join-organisation',
    component: PortalParticipateSuccessJoinOrganisationComponent,
  },
  {
    path: 'success-contest',
    component: PortalParticipateSuccessContestComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortalParticipateRoutingModule { }
