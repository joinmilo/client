
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/landing/navigator-portal-details-landing.module')
      .then((imported) => imported.NavigatorPortalDetailsLandingModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NavigatorPortalDetailsRoutingModule { }
