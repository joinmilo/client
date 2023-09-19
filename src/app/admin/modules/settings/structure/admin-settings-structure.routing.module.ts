import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { AdminActions } from 'src/app/admin/state/admin.actions';
import { AdminSettingsRoutes } from 'src/app/admin/typings/menu';

const baseRoute = 'structure';

const routes: AdminSettingsRoutes[] = [
  {
    path: `${baseRoute}/menu`,
    loadComponent: () => import('./menu/admin-settings-menu.component')
      .then((imported) => imported.AdminSettingsMenuComponent),
    data: {
      name: 'editPortalMenu',
      description: 'editPortalMenuDescription',
      icon: 'folder-tree'
    },
  },
  {
    path: `${baseRoute}/theme`,
    loadComponent: () => import('./theme/admin-settings-theme.component')
      .then((imported) => imported.AdminSettingsThemeComponent),
    data: {
      name: 'editColorTheme',
      description: 'editColorThemeDescription',
      icon: 'palette'
    },
  },
  {
    path: `${baseRoute}/plugins`,
    loadChildren: () => import('./feature/admin-settings-feature.module')
      .then((imported) => imported.AdminSettingsFeatureModule),
    data: {
      name: 'plugins',
      description: 'pluginsDescription',
      icon: 'swatchbook'
    },
  },
  {
    path: `${baseRoute}/configuration`,
    loadComponent: () => import('./configuration/admin-settings-configuration.component')
      .then((imported) => imported.AdminSettingsConfigurationComponent),
    data: {
      name: 'configuration',
      description: 'configurationDescription',
      icon: 'gear'
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild([
    ...routes,
  ])],
  exports: [RouterModule]
})
export class AdminSettingsStructureRoutingModule {

  constructor(
    public store: Store
  ) {
    this.store.dispatch(AdminActions.addSettingsMenu({
      name: 'structure',
      childs: routes.map(route => ({
        name: route.data?.name,
        description: route.data?.description,
        route: route.path,
        icon: route.data?.icon
      }))
    }));
  }
}
