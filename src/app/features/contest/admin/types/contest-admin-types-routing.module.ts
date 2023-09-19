import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContestAdminTypesComponent } from './component/contest-admin-types.component';

const routes: Routes = [
  {
    path: '',
    component: ContestAdminTypesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContestAdminTypesRoutingModule { }
