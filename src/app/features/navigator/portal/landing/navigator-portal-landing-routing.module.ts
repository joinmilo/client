
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigatorPortalLandingComponent } from './component/navigator-portal-landing.component';

const routes: Routes = [
  {
    path: '',
    component: NavigatorPortalLandingComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NavigatorPortalLandingRoutingModule { }
