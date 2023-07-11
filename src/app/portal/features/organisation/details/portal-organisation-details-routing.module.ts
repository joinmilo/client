import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortalOrganisationDetailsCommentsComponent } from './components/comments/portal-organisation-details-comments.component';
import { PortalOrganisationDetailsComponent } from './components/portal-organisation-details.component';

const routes: Routes = [
  {
    path: '',
    component: PortalOrganisationDetailsComponent
  },
  {
    path: 'comments',
    component: PortalOrganisationDetailsCommentsComponent
  }, 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortalOrganisationDetailsRoutingModule { }
