import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortalMediaOverviewComponent } from './components/portal-media-overview.component';
const routes: Routes = [
  {
    path: '',
    component: PortalMediaOverviewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortalMediaOverviewRoutingModule { }
