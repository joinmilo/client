import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReportAdminTypesComponent } from './component/report-admin-types.component';

const routes: Routes = [
  {
    path: '',
    component: ReportAdminTypesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportAdminTypesRoutingModule { }
