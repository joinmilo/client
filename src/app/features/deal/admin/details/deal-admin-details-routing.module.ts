import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { searchRoute } from './constants/deal-admin-details.constants';
import { DealAdminDetailsLandingComponent } from './modules/landing/components/deal-admin-details-landing.component';
import { DealAdminDetailsSearchComponent } from './modules/search/component/deal-admin-details-search.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/landing/deal-admin-details-landing.module')
      .then((imported) => imported.DealAdminDetailsLandingModule),
    component: DealAdminDetailsLandingComponent
  },
    {
    path: searchRoute,
    loadChildren: () => import('./modules/search/deal-admin-details-search.module')
      .then((imported) => imported.DealAdminDetailsSearchModule),
      component: DealAdminDetailsSearchComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DealAdminDetailsRoutingModule { }

