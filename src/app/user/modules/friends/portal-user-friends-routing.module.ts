import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortalFriendsComponent } from './components/portal-friends.component';

const routes: Routes = [
  {
    path: '',
    component: PortalFriendsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PortalUserFriendsRoutingModule {}
