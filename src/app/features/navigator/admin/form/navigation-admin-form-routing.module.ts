import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DealAdminFormComponent } from './component/navigation-admin-form.component';

const routes: Routes = [
  {
    path: '',
    component: DealAdminFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DealAdminFormRoutingModule { }
