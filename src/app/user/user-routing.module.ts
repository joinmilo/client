import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { favoriteUserFeatureKey, friendsUserFeatureKey } from './constants/user.constants';

const routes: Routes = [
  {
    path: favoriteUserFeatureKey,
    loadChildren: () => import('./features/favorites/portal-user-favorites.module')
      .then((imported) => imported.PortalFavoritesModule),
  },
  {
    path: friendsUserFeatureKey,
    loadChildren: () => import('./features/friends/portal-user-friends.module')
      .then((imported) => imported.PortalFriendsModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
