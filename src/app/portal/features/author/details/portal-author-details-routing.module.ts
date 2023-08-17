import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortalAuthorDetailsMediaComponent } from './components/media/portal-author-details-media.component';
import { PortalAuthorDetailsComponent } from './components/portal-author-details.component';

const routes: Routes = [
  {
    path: '',
    component: PortalAuthorDetailsComponent
  },
  {
    path: 'media',
    component: PortalAuthorDetailsMediaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortalAuthorDetailsRoutingModule { }
