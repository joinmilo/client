import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from '../core/auth-guard/auth-guard.service';
import { favoriteUserFeatureKey, friendsUserFeatureKey } from './constants/user.constants';

const routes: Routes = [
  {
    path: favoriteUserFeatureKey,
    loadChildren: () => import('./features/favorites/portal-user-favorites.module')
      .then((imported) => imported.PortalFavoritesModule),
      canActivate:[AuthGuardService]
  },
  {
    path: friendsUserFeatureKey,
    loadChildren: () => import('./features/friends/portal-user-friends.module')
      .then((imported) => imported.PortalFriendsModule),
      canActivate:[AuthGuardService]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
