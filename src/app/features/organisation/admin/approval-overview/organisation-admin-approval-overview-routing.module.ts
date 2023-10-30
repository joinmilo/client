import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrganisationAdminApprovalOverviewComponent } from './component/organisation-admin-approval-overview.component';

const routes: Routes = [
  {
    path: '',
    component: OrganisationAdminApprovalOverviewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrganisationAdminApprovalOverviewRoutingModule { }
