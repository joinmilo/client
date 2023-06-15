import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortalUserNotificationsComponent } from './components/portal-user-notifications.component';

const routes: Routes = [
  {
    path: '',
    component: PortalUserNotificationsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PortalUserNotificationsRoutingModule {}
