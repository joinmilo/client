import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortalOrganisationDetailsCommentsComponent } from './components/comments/portal-organisation-details-comments.component';
import { PortalOrganisationDetailsMediaComponent } from './components/media/portal-organisation-details-media.component';
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
  {
    path: 'media',
    component: PortalOrganisationDetailsMediaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortalOrganisationDetailsRoutingModule { }
