import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountLayoutComponent } from './account/components/layout/account-layout.component';
import { AdminLayoutComponent } from './admin/modules/layout/admin-layout.component';
import { accountUrl, adminUrl, portalUrl, userUrl } from './core/constants/module.constants';
import { AuthGuardService } from './core/guards/auth-guard.service';
import { PortalLayoutComponent } from './portal/modules/layout/portal-layout.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    path: portalUrl,
    loadChildren: () => import('./portal/portal.module')
      .then(imported => imported.PortalModule),
    component: PortalLayoutComponent,
  },
  {
    path: adminUrl,
    loadChildren: () => import('./admin/admin.module')
      .then(imported => imported.AdminModule),
    component: AdminLayoutComponent,
  },
  {
    path: accountUrl,
    loadChildren: () => import('./account/account.module')
      .then(imported => imported.AccountModule),
    component: AccountLayoutComponent,
  },
  {
    path: userUrl,
    loadChildren: () => import('./user/user.module')
      .then(imported => imported.UserModule),
    component: UserComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: `/${portalUrl}`,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
