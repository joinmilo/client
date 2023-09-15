import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { searchRoute, visitorsRoute } from './constants/survey-admin-details.constants';
import { SurveyAdminDetailsLandingComponent } from './modules/landing/components/survey-admin-details-landing.component';
import { SurveyAdminDetailsSearchComponent } from './modules/search/component/survey-admin-details-search.component';
import { SurveyAdminDetailsVisitorsComponent } from './modules/visitors/component/survey-admin-details-visitors.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/landing/survey-admin-details-landing.module')
      .then((imported) => imported.SurveyAdminDetailsLandingModule),
    component: SurveyAdminDetailsLandingComponent
  },
    {
    path: searchRoute,
    loadChildren: () => import('./modules/search/survey-admin-details-search.module')
      .then((imported) => imported.SurveyAdminDetailsSearchModule),
      component: SurveyAdminDetailsSearchComponent
  },
  {
    path: visitorsRoute,
    loadChildren: () => import('./modules/visitors/survey-admin-details-visitors.module')
      .then((imported) => imported.SurveyAdminDetailsVisitorsModule),
    component: SurveyAdminDetailsVisitorsComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SurveyAdminDetailsRoutingModule { }

