import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { favoriteUserFeatureKey, friendsUserFeatureKey, participateFeatureKey } from './constants/user.constants';


const routes: Routes = [
  {
    path: participateFeatureKey,
    loadChildren: () => import('./modules/participate/portal-user-participate.module')
      .then((imported) => imported.PortalParticipateModule),
  },  
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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
