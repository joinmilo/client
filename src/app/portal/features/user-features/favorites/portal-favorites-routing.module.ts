import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortalFavoritesComponent } from './components/portal-favorites.component';

const routes: Routes = [
  {
    path: '',
    component: PortalFavoritesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PortalFavoritesRoutingModule {}
