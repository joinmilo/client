
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { slug } from 'src/app/core/constants/queryparam.constants';
import { NavigatorRefreshGuard } from 'src/app/features/navigator/portal/details/modules/layout/navigator-guard/page-refresh-guard.service';
import { navigatorResultRoute, navigatorStartRoute } from './constants/navigator-details.constant';
import { NavigatorPortalDetailsLandingComponent } from './modules/landing/navigator-portal-details-landing.component';
import { NavigatorPortalDetailsLayoutComponent } from './modules/layout/components/navigator-portal-details-layout.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/landing/navigator-portal-details-landing.module')
      .then((imported) => imported.NavigatorPortalDetailsLandingModule),
      component: NavigatorPortalDetailsLandingComponent
  },
  {
    path: navigatorStartRoute,
    loadChildren: () => import('./modules/layout/navigator-portal-details-layout.module')
      .then((imported) => imported.NavigatorPortalDetailsLayoutModule),
      component: NavigatorPortalDetailsLayoutComponent
  },
  {
    path: `${navigatorStartRoute}/:${slug}`,
    loadChildren: () => import('./modules/layout/navigator-portal-details-layout.module')
      .then((imported) => imported.NavigatorPortalDetailsLayoutModule),
      component: NavigatorPortalDetailsLayoutComponent,
      canActivate: [NavigatorRefreshGuard]
  },
  {
    path: `${navigatorResultRoute}/:${slug}`,
    loadChildren: () => import('./modules/layout/navigator-portal-details-layout.module')
      .then((imported) => imported.NavigatorPortalDetailsLayoutModule),
      component: NavigatorPortalDetailsLayoutComponent,
      canActivate: [NavigatorRefreshGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NavigatorPortalDetailsRoutingModule { }
