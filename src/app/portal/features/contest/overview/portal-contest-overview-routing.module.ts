import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortalContestOverviewComponent } from './components/portal-contest-overview.component';

const routes: Routes = [
  {
    path: '',
    component: PortalContestOverviewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortalContestOverviewRoutingModule { }
