import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortalContestDetailsComponent } from './components/portal-contest-details.component';

const routes: Routes = [
  {
    path: '',
    component: PortalContestDetailsComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortalContestDetailsRoutingModule { }
