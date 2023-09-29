import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContestAdminTypeFormComponent } from './components/contest-admin-type-form.component';


const routes: Routes = [
  {
    path: '',
    component: ContestAdminTypeFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContestAdminTypeFormRoutingModule { }
