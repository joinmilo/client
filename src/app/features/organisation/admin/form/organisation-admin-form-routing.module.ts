import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrganisationAdminFormComponent } from './component/organisation-admin-form.component';

const routes: Routes = [
  {
    path: '',
    component: OrganisationAdminFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrganisationAdminFormRoutingModule { }
