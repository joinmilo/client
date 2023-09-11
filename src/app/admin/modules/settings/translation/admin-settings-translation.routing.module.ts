import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { AdminActions } from 'src/app/admin/state/admin.actions';
import { AdminSettingsRoutes } from 'src/app/admin/typings/menu';

const baseRoute = 'translation';

const routes: AdminSettingsRoutes[] = [
  {
    path: `${baseRoute}/languages`,
    loadChildren: () => import('src/app/admin/modules/settings/translation/language/admin-settings-language.module')
      .then((imported) => imported.AdminSettingsLanguageModule),
    data: {
      name: 'languages',
      description: 'languagesDescription',
      icon: 'earth-europe'
    }
  },
  {
    path: `${baseRoute}/labels`,
    loadComponent: () => import('./label/admin-settings-label.component')
      .then((imported) => imported.AdminSettingsLabelComponent),
    data: {
      name: 'translateStaticLabels',
      description: 'translateStaticLabelsDescription',
      icon: 'language'
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild([
    ...routes,
  ])],
  exports: [RouterModule]
})
export class AdminSettingsTranslationRoutingModule {

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
