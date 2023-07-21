import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AccountComponent } from './account/account.component';
import { accountUrl, userUrl } from './core/constants/core.constants';
import { PortalComponent } from './portal/portal.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    path: 'portal',
    loadChildren: () => import('./portal/portal.module')
      .then((imported) => imported.PortalModule),
    component: PortalComponent,
  },
  
  {
    path: accountUrl,
      loadChildren: () => import('./account/account.module')
      .then((imported) => imported.AccountModule),
    component: AccountComponent,
  },

  {
    path: userUrl,
      loadChildren: () => import('./user/user.module')
      .then((imported) => imported.UserModule),
    component: UserComponent,
  },

  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '/portal',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
