import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { AdminActions } from 'src/app/admin/state/admin.actions';
import { AdminSettingsRoute } from 'src/app/admin/typings/menu';
import { requireAnyPrivilege } from 'src/app/core/utils/privilege.utils';

const baseRoute = 'translation';

const routes: AdminSettingsRoute[] = [
  {
    path: `${baseRoute}/languages`,
    loadChildren: () => import('./language/admin-settings-language.module')
      .then((imported) => imported.AdminSettingsLanguageModule),
    data: {
      name: 'languages',
      description: 'languagesDescription',
      icon: 'earth-europe',
      privileges: ['translator_admin'],
    },
    canActivate: [requireAnyPrivilege('translator_admin')]
  },
  {
    path: `${baseRoute}/labels`,
    loadChildren: () => import('./label/admin-settings-label.module')
      .then((imported) => imported.AdminSettingsLabelModule),
    data: {
      name: 'translateStaticLabels',
      description: 'translateStaticLabelsDescription',
      icon: 'language',
      privileges: ['translator_admin'],
    },
    canActivate: [requireAnyPrivilege('translator_admin')]
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
      privileges: ['translator_admin'],
      childs: routes.map(route => ({
        name: route.data?.name,
        description: route.data?.description,
        route: route.path,
        icon: route.data?.icon,
        privileges: route.data.privileges,
      }))
    }));
  }
}
