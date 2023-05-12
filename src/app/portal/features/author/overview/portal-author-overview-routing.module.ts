import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortalAuthorOverviewComponent } from './components/portal-author-overview.component';

const routes: Routes = [
  {
    path: '',
    component: PortalAuthorOverviewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortalAuthorOverviewRoutingModule { }
