import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DealAdminOverviewComponent } from './component/deal-admin-overview.component';

const routes: Routes = [
  {
    path: '',
    component: DealAdminOverviewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DealAdminOverviewRoutingModule { }
