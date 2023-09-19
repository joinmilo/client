import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReportAdminOverviewComponent } from './component/report-admin-overview.component';

const routes: Routes = [
  {
    path: '',
    component: ReportAdminOverviewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportAdminOverviewRoutingModule { }
