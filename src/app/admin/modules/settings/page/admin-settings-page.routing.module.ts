import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { AdminActions } from 'src/app/admin/state/admin.actions';
import { AdminSettingsRoutes } from 'src/app/admin/typings/menu';
import { AdminSettingsPageFormComponent } from './page-form/admin-settings-page-form.component';

const baseRoute = 'pages';

const routes: AdminSettingsRoutes[] = [
  {
    path: `${baseRoute}/overview`,
    loadChildren: () => import('src/app/admin/modules/settings/page/pages-overview/admin-settings-pages.module')
      .then((imported) => imported.AdminSettingsPagesModule),
    data: {
      name: 'pagesOverview',
      description: 'pagesOverviewDescription',
      icon: 'file-lines'
    }
  },
  {
    path: `${baseRoute}/form`,
    loadChildren: () => import('./page-form/admin-settings-page-form.module')
      .then((imported) => imported.AdminSettingsPageFormModule),
      component: AdminSettingsPageFormComponent,
    data: {
      name: 'createNewPage',
      description: 'createNewPageDescription',
      icon: 'file-circle-plus'
    },
  },
  {
    path: `${baseRoute}/landing`,
    loadComponent: () => import('./landing-form/admin-settings-landing-form.component')
      .then((imported) => imported.AdminSettingsLandingFormComponent),
    data: {
      name: 'editLandingPage',
      description: 'editLandingPageDescription',
      icon: 'house'
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild([
    ...routes,
  ])],
  exports: [RouterModule]
})
export class AdminSettingsPageRoutingModule {

  constructor(
    public store: Store
  ) {
    this.store.dispatch(AdminActions.addSettingsMenu({
      name: 'pageContent',
      childs: routes.map(route => ({
        name: route.data?.name,
        description: route.data?.description,
        route: route.path,
        icon: route.data?.icon
      }))
    }));
  }
}
