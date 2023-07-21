import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { favoriteUserFeatureKey } from './constants/user.constants';

const routes: Routes = [
  {
    path: favoriteUserFeatureKey,
    loadChildren: () => import('./features/favorites/portal-user-favorites.module')
      .then((imported) => imported.PortalFavoritesModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
