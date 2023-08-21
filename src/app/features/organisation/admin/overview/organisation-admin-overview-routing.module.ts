import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrganisationAdminOverviewComponent } from './component/organisation-admin-overview.component';

const routes: Routes = [
  {
    path: '',
    component: OrganisationAdminOverviewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrganisationAdminOverviewRoutingModule { }
