import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { navigatorFeatureKey } from 'src/app/core/constants/feature.constants';
import { navigatorQuestionsRoute } from './questions/constants/navigator-questions.constant';

const routes: Routes = [
  {
    path: navigatorFeatureKey,
    loadChildren: () => import('./landing/navigator-portal-landing.module')
      .then((imported) => imported.NavigatorPortalLandingModule),
  },
  {
    path: `${navigatorFeatureKey}/${navigatorQuestionsRoute}`,
    loadChildren: () => import('./questions/navigator-portal-questions.module')
      .then((imported) => imported.NavigatorPortalQuestionsModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NavigatorPortalRoutingModule { }
