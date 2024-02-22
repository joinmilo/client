import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigatorPortalDetailsLandingComponent } from './components/navigator-portal-details-landing.component';

const routes: Routes = [
  {
    path: '',
    component: NavigatorPortalDetailsLandingComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NavigatorPortalDetailsLandingRoutingModule { }
