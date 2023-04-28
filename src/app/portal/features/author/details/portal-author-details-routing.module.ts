import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortalAuthorDetailsComponent } from './component/portal-author-details.component';

const routes: Routes = [
  {
    path: '',
    component: PortalAuthorDetailsComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortalAuthorDetailsRoutingModule { }
