import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { settingsUrl } from '../core/constants/module.constants';

const routes: Routes = [
  {
    path: 'notifications',
    loadChildren: () => import('../shared/pages/notification/notification.module')
      .then((imported) => imported.NotificationModule),
  },
  {
    path: '404',
    loadChildren: () => import('../shared/pages/not-found/not-found.module')
      .then(imported => imported.NotFoundModule),
  },
  {
    path: settingsUrl,
    loadChildren: () => import('./modules/settings/admin-settings.module')
      .then(imported => imported.AdminSettingsModule),
  },
  { path: '',
    loadComponent: () => import('./modules/landing/admin-landing.component')
      .then(imported => imported.AdminLandingComponent)
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '404',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
