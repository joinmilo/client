import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContestPortalDetailsLandingComponent } from './components/contest-portal-details-landing.component';

const routes: Routes = [
  {
    path: '',
    component: ContestPortalDetailsLandingComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContestPortalDetailsLandingRoutingModule { }
