import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContestAdminFormComponent } from './component/contest-admin-form.component';

const routes: Routes = [
  {
    path: '',
    component: ContestAdminFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContestAdminFormRoutingModule { }
