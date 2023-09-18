import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { searchRoute, visitorsRoute } from './constants/admin-settings-page-details.constants';
import { AdminSettingsPageDetailsLandingComponent } from './modules/landing/components/admin-settings-page-details-landing.component';
import { AdminSettingsPageDetailsSearchComponent } from './modules/search/component/admin-settings-page-details-search.component';
import { AdminSettingsPageDetailsVisitorsComponent } from './modules/visitors/component/admin-settings-page-details-visitors.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/landing/admin-settings-page-details-landing.module')
      .then((imported) => imported.AdminSettingsPageDetailsLandingModule),
    component: AdminSettingsPageDetailsLandingComponent
  },
  {
    path: visitorsRoute,
    loadChildren: () => import('./modules/visitors/admin-settings-page-details-visitors.module')
      .then((imported) => imported.AdminSettingsPageDetailsVisitorsModule),
    component: AdminSettingsPageDetailsVisitorsComponent
  },
    {
    path: searchRoute,
    loadChildren: () => import('./modules/search/admin-settings-page-details-search.module')
      .then((imported) => imported.AdminSettingsPageDetailsSearchModule),
      component: AdminSettingsPageDetailsSearchComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminSettingsPageDetailsRoutingModule { }

