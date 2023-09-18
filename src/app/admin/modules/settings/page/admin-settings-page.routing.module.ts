import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Store } from '@ngrx/store';
import { AdminActions } from 'src/app/admin/state/admin.actions';
import { AdminSettingsRoutes } from 'src/app/admin/typings/menu';
import { slug } from 'src/app/core/constants/queryparam.constants';
import { AdminSettingsPageDetailsLayoutComponent } from './details/modules/layout/components/admin-settings-page-details-layout.component';
import { AdminSettingsPageFormComponent } from './page-form/admin-settings-page-form.component';

const baseRoute = 'pages';

const menuRoutes: AdminSettingsRoutes[] = [
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

const routes: Routes = [
  {
    path: `${baseRoute}/:${slug}`,
    loadChildren: () => import('src/app/admin/modules/settings/page/details/admin-settings-page-details.module')
      .then((imported) => imported.AdminSettingsPageDetailsModule),
    component: AdminSettingsPageDetailsLayoutComponent
  },
]

@NgModule({
  imports: [RouterModule.forChild([
    ...menuRoutes,
    ...routes
  ])],
  exports: [RouterModule]
})
export class AdminSettingsPageRoutingModule {

  constructor(
    public store: Store
  ) {
    this.store.dispatch(AdminActions.addSettingsMenu({
      name: 'pageContent',
      childs: menuRoutes.map(route => ({
        name: route.data?.name,
        description: route.data?.description,
        route: route.path,
        icon: route.data?.icon
      }))
    }));
  }
}
