import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { favoritesRoute } from 'src/app/features/article/admin/details/constants/article-admin-details.constants';
import { searchRoute, visitorsRoute } from './constants/deal-admin-details.constants';
import { DealAdminDetailsFavoritesComponent } from './modules/favorites/components/deal-admin-details-favorites.component';
import { DealAdminDetailsLandingComponent } from './modules/landing/components/deal-admin-details-landing.component';
import { DealAdminDetailsSearchComponent } from './modules/search/component/deal-admin-details-search.component';
import { DealAdminDetailsVisitorsComponent } from './modules/visitors/component/deal-admin-details-visitors.component';

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
  {
    path: visitorsRoute,
    loadChildren: () => import('./modules/visitors/deal-admin-details-visitors.module')
      .then((imported) => imported.DealAdminDetailsVisitorsModule),
    component: DealAdminDetailsVisitorsComponent
  },
  {
    path: favoritesRoute,
    loadChildren: () => import('./modules/favorites/deal-admin-details-favorites.module')
      .then((imported) => imported.DealAdminDetailsFavoritesModule),
    component: DealAdminDetailsFavoritesComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DealAdminDetailsRoutingModule { }

