import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminSettingsPrivilegeApplicationOverviewComponent } from './components/overview/admin-settings-privilege-application-overview.component';

const routes: Routes = [
  {
    path: '',
    component: AdminSettingsPrivilegeApplicationOverviewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AuthorSettingsAdminApprovalOverviewRoutingModule { }
