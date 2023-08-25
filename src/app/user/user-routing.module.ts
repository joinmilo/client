import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { favoriteUserFeatureKey, friendsUserFeatureKey, settingsUserFeatureKey } from './constants/user.constants';

const routes: Routes = [
  {
    path: favoriteUserFeatureKey,
    loadChildren: () => import('./modules/favorites/portal-user-favorites.module')
      .then((imported) => imported.PortalFavoritesModule),
  },
  {
    path: friendsUserFeatureKey,
    loadChildren: () => import('./modules/friends/portal-user-friends.module')
      .then((imported) => imported.PortalFriendsModule),
  },
  {
    path: settingsUserFeatureKey,
    loadChildren: () => import('./modules/settings/portal-user-settings.module')
      .then((imported) => imported.PortalSettingsModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
