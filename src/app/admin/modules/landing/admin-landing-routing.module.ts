import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLandingComponent } from './component/admin-landingComponent';

const routes: Routes = [
  {
    path: '',
    component: AdminLandingComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminLandingRoutingModule { }
