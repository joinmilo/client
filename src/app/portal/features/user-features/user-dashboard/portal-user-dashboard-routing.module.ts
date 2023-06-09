import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortalUserDashboardComponent } from './components/portal-user-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: PortalUserDashboardComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PortalUserDashboardRoutingModule {}
