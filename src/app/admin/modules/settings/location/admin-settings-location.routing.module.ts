import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { AdminActions } from 'src/app/admin/state/admin.actions';
import { AdminSettingsRoutes } from 'src/app/admin/typings/menu';

const baseRoute = 'location';

const routes: AdminSettingsRoutes[] = [
  {
    path: `${baseRoute}/addresses`,
    loadChildren: () => import('src/app/admin/modules/settings/location/address/admin-settings-address.module')
      .then((imported) => imported.AdminSettingsAddressModule),
    data: {
      name: 'addresses',
      description: 'addressesDescription',
      icon: 'location-dot'
    }
  },
  {
    path: `${baseRoute}/suburbs`,
    loadChildren: () => import('src/app/admin/modules/settings/location/suburb/admin-settings-suburb.module')
      .then((imported) => imported.AdminSettingsSuburbModule),
    data: {
      name: 'suburbs',
      description: 'suburbsDescription',
      icon: 'map-location'
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild([
    ...routes,
  ])],
  exports: [RouterModule]
})
export class AdminSettingsLocationRoutingModule {

  constructor(
    public store: Store
  ) {
    this.store.dispatch(AdminActions.addSettingsMenu({
      name: 'location',
      childs: routes.map(route => ({
        name: route.data?.name,
        description: route.data?.description,
        route: route.path,
        icon: route.data?.icon
      }))
    }));
  }
}
