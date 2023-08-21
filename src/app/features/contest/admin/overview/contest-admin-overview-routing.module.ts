import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContestAdminOverviewComponent } from './component/contest-admin-overview.component';

const routes: Routes = [
  {
    path: '',
    component: ContestAdminOverviewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContestAdminOverviewRoutingModule { }
