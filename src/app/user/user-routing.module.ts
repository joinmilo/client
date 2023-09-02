import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { favoriteUserFeatureKey, friendsUserFeatureKey, participateFeatureKey, settingsUserFeatureKey } from './constants/user.constants';
import { UserLayoutComponent } from './modules/settings/components/layout/user-layout.component';

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
    path: participateFeatureKey,
    loadChildren: () => import('./modules/participate/portal-user-participate.module')
      .then((imported) => imported.PortalParticipateModule),
  },  
  {
    path: settingsUserFeatureKey,
    loadChildren: () => import('./modules/settings/user-settings.module')
      .then((imported) => imported.UserSettingsModule),
    component: UserLayoutComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
