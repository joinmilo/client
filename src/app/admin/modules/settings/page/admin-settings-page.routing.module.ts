import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Store } from '@ngrx/store';
import { AdminActions } from 'src/app/admin/state/admin.actions';
import { AdminSettingsRoute } from 'src/app/admin/typings/menu';
import { slug } from 'src/app/core/constants/queryparam.constants';
import { requireAnyPrivilege } from 'src/app/core/utils/privilege.utils';
import { AdminSettingsPageDetailsLayoutComponent } from './details/modules/layout/components/admin-settings-page-details-layout.component';
import { AdminSettingsPageFormComponent } from './page-form/component/admin-settings-page-form.component';

const baseRoute = 'pages';

const menuRoutes: AdminSettingsRoute[] = [
  {
    path: `${baseRoute}/overview`,
    loadChildren: () => import('src/app/admin/modules/settings/page/pages-overview/admin-settings-pages.module')
      .then((imported) => imported.AdminSettingsPagesModule),
    data: {
      name: 'pagesOverview',
      description: 'pagesOverviewDescription',
      icon: 'file-lines',
      privileges: ['cms_admin']
    },
    canActivate: [requireAnyPrivilege('cms_admin')],
  },
  {
    path: `${baseRoute}/form`,
    loadChildren: () => import('./page-form/admin-settings-page-form.module')
      .then((imported) => imported.AdminSettingsPageFormModule),
      component: AdminSettingsPageFormComponent,
    data: {
      name: 'createNewPage',
      description: 'createNewPageDescription',
      icon: 'file-circle-plus',
      privileges: ['cms_admin']
    },
    canActivate: [requireAnyPrivilege('cms_admin')],
  },
  {
    path: `${baseRoute}/landing`,
    loadComponent: () => import('./landing-form/admin-settings-landing-form.component')
      .then((imported) => imported.AdminSettingsLandingFormComponent),
    data: {
      name: 'editLandingPage',
      description: 'editLandingPageDescription',
      icon: 'house',
      privileges: ['cms_admin']
    },
    canActivate: [requireAnyPrivilege('cms_admin')],
  },
];

const routes: Routes = [
  {
    path: `${baseRoute}/overview/form`,
    loadChildren: () => import('./page-form/admin-settings-page-form.module')
      .then((imported) => imported.AdminSettingsPageFormModule),
    canActivate: [requireAnyPrivilege('cms_admin')]
  },
  {
    path: `${baseRoute}/:${slug}/form`,
    loadChildren: () => import('./page-form/admin-settings-page-form.module')
      .then((imported) => imported.AdminSettingsPageFormModule),
    canActivate: [requireAnyPrivilege('cms_admin')]
  },
  {
    path: `${baseRoute}/:${slug}`,
    loadChildren: () => import('./details/admin-settings-page-details.module')
      .then((imported) => imported.AdminSettingsPageDetailsModule),
    component: AdminSettingsPageDetailsLayoutComponent,
    canActivate: [requireAnyPrivilege('cms_admin')]
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
      privileges: ['cms_admin'],
      childs: menuRoutes.map(route => ({
        name: route.data?.name,
        description: route.data?.description,
        route: route.path,
        icon: route.data?.icon,
        privileges: route.data.privileges,
      }))
    }));
  }
}
